/* eslint-disable react-hooks/rules-of-hooks */
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import PreLoader from "../components/common/PreLoader";
interface IProps {
  children: ReactNode;
}
export default function PrivateRoute({ children }: IProps) {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const location = useLocation();
  if (isLoading) {
    return <PreLoader />;
  }
  if (!user?.email && !isLoading) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
