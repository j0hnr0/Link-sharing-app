import { DropdownProvider } from "./context/DropdownContext";

export default function DashboardLayout({ children }) {
  return <DropdownProvider>{children}</DropdownProvider>;
}
