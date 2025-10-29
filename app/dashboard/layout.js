import Header from "./_components/Header";
import PhoneMockup from "./_components/PhoneMockup";
import { DropdownProvider } from "./_context/DropdownContext";

export default function DashboardLayout({ children }) {
  return (
    <DropdownProvider>
      <main
        className="bg-custom-grey-50 p-6
    max-custom-semism:p-0"
      >
        <Header />

        <div
          className="mt-6 flex gap-6
      max-custom-semism:m-4"
        >
          <PhoneMockup />
          {children}
        </div>
      </main>
    </DropdownProvider>
  );
}
