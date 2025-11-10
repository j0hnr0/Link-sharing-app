import Header from "./Header";
import PhoneMockup from "./PhoneMockup";

export default function EditorContainer({ children }) {
  return (
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
  );
}
