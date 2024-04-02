import Toast from "@/components/common/Toast/Toast";

interface ErrorResponse {
  msg?: string;
  detail?: string;
  name?: string[];
}

interface ErrorWithResponse {
  response: {
    data?: ErrorResponse;
    status?: number;
  };
}

export function ExceptionHandler(error: ErrorWithResponse | Error) {
  const handleAuthError = () => {
    Toast("Your session has expired", "success");
    localStorage.removeItem("token");
    window.location.href = "/auth";
  };

  const handleStatusCodeError = (status: number, msg?: string) => {
    switch (status) {
      case 403:
        Toast(
          msg ?? "This Role is restricted to access to this request.",
          "error"
        );
        break;
      case 500:
        Toast(msg ?? "Internal Server Error", "error");
        break;
      case 503:
        Toast(msg ?? "Service Unavailable", "error");
        break;
      case 422:
        Toast(msg ?? "Cannot Process Please Try Again", "error");
        break;
      case 405:
        Toast(msg ?? "Not Found", "error");
        break;
      case 406:
        Toast(msg ?? "Already Exist", "error");
        break;
      case 404:
        Toast(msg ?? "API Not Found", "error");
        break;
      case 444:
        Toast(msg ?? "Invalid Data", "error");
        break;
      case 400:
        Toast(msg ?? "Bad Request", "error");
        break;
      case 430:
        Toast(msg ?? "error.response.data", "error");
        break;
      case 413:
        Toast(msg ?? "Payload Too Large", "error");
        break;
      default:
        Toast(msg ?? "Unknown Error", "error");
        break;
    }
  };

  if ("response" in error) {
    const { msg, detail, name } = (error.response.data || {}) as ErrorResponse;
    const status = error.response.status || 0;

    if (status === 401) {
      handleAuthError();
    } else {
      const errorMessage = msg || name || detail;
      if (Array.isArray(errorMessage)) {
        errorMessage.forEach((error) => {
          handleStatusCodeError(status, error);
        });
      } else if (typeof errorMessage === "string") {
        handleStatusCodeError(status, errorMessage);
      } else {
        handleStatusCodeError(status, "Unknown Error");
      }
    }
  } else {
    Toast("No Internet Connection", "error");
  }
}
