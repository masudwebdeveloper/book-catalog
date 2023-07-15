import MainLayout from "./layouts/MainLayout";
import { Toaster } from "react-hot-toast";
import { useAppDispatch } from "./redux/hook";
import { useEffect } from "react";
import {
  setDisplayName,
  setLoading,
  setPhotoUrl,
  setUser,
} from "./redux/features/user/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user?.email));
        dispatch(setDisplayName(user?.displayName));
        dispatch(setPhotoUrl(user?.photoURL));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);
  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  );
};

export default App;
