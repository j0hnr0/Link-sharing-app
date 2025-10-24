import { DropdownProvider } from "./context/DropDownContext";

export default function DashboardLayout({ children }) {
  return <DropdownProvider>{children}</DropdownProvider>;
}
