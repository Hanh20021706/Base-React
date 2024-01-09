import { useRole } from "./constants";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ expectedRoles, children }: any) => {
  const isAuthorized = true;

  const areRolesRequired = !!expectedRoles?.length;

  const role = [useRole.admin];

  const roleMatch = areRolesRequired
    ? expectedRoles.some((r: string) => role.indexOf(r) >= 0)
    : true;

  if (!isAuthorized || !roleMatch) {
    return <Navigate to={"/"} replace />;
  }
  return children;
};

export default ProtectedRoute;
