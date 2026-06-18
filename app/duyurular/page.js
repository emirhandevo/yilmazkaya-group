import AnnouncementsPage from "@/components/pages/AnnouncementsPage";

export const metadata = {
  title: "Duyurular | Yılmazkaya Group",
  description: "Yılmazkaya Group güncel duyuru ve haberleri.",
};

export default function DuyurularPage() {
  return <AnnouncementsPage locale="tr" />;
}
