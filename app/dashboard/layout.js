import { DropdownProvider } from "./_context/DropdownContext";

export default function DashboardLayout({ children }) {
  return <DropdownProvider>{children}</DropdownProvider>;
}
