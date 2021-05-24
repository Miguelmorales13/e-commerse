enum RequestMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
  ALL = "ALL",
  OPTIONS = "OPTIONS",
  HEAD = "HEAD"
}

export const getMessageGeneric = (method: RequestMethod) => {
  switch (method) {
    case RequestMethod.GET:
      return "get susccessfull";
    case RequestMethod.PATCH:
      return "update susccessfull";
    case RequestMethod.DELETE:
      return "delete susccessfull";
    case RequestMethod.POST:
      return "create susccessfull";
    default:
      return "";
  }
};