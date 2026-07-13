import { companyData, locationsData, advantageData as repoAdvantageData } from "@/lib/content/repository";
import { advantageData } from "@/lib/content/advantage";
import { pickupItems } from "@/lib/content/pickups";
import { VerifiedContent, ImageAsset } from "@/lib/content/types";
import { notFound } from "next/navigation";

export const metadata = {
  title: "【DEV】Content Audit",
};

export default function ContentAuditPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  const allData: { key: string; data: VerifiedContent<unknown> }[] = [
    { key: "employeeCount", data: companyData.employeeCount },
    { key: "mottoUniqueCopy", data: companyData.mottoUniqueCopy },
    { key: "banks", data: companyData.banks },
    { key: "clients", data: companyData.clients },
    { key: "partners", data: companyData.partners },
    { key: "presidentMessage", data: companyData.presidentMessage },
    ...locationsData.flatMap(loc => [
      { key: `${loc.id}.tel`, data: loc.tel },
      { key: `${loc.id}.fax`, data: loc.fax }
    ]),
    { key: "otaProcessingArea", data: repoAdvantageData.otaProcessingArea },
    { key: "partnerRegionsCount", data: repoAdvantageData.partnerRegionsCount },
    { key: "shareholderStatus", data: repoAdvantageData.shareholderStatus },
    { key: "testKitchenStatus", data: repoAdvantageData.testKitchenStatus },
    { key: "brandSupportStatus", data: repoAdvantageData.brandSupportStatus },
  ];

  const pendingItems = allData.filter(item => item.data.status === "pending");
  const missingSourceItems = allData.filter(item => !item.data.source);
  
  const images: { key: string; data: ImageAsset | undefined }[] = [
    { key: "presidentImage", data: companyData.presidentImage },
    { key: "heroImage", data: advantageData.hero.image },
    ...advantageData.cards.map(c => ({ key: `advantageCard-${c.id}`, data: c.image })),
    { key: "pickup-mitaaji", data: pickupItems[0].image },
    { key: "pickup-chefoodo", data: pickupItems[1].image },
  ];
  const pendingPermissionImages = images.filter(img => img.data && img.data.permissionStatus === "pending");

  return (
    <div className="container mx-auto p-8 font-sans">
      <div className="bg-red-50 text-red-800 p-4 rounded-md mb-8 border border-red-200">
        <h1 className="text-2xl font-bold mb-2">開発用：コンテンツ監査ダッシュボード</h1>
        <p>このページは本番環境では表示されません。未確認情報や仮画像のステータスを確認するための内部画面です。</p>
      </div>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">未確認情報一覧 (Pending)</h2>
        <div className="bg-white rounded border overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Key</th>
                <th className="p-3">Value</th>
                <th className="p-3">Note (確認内容)</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {pendingItems.map((item, i) => (
                <tr key={i}>
                  <td className="p-3 font-mono text-xs">{item.key}</td>
                  <td className="p-3 max-w-xs truncate">{JSON.stringify(item.data.value)}</td>
                  <td className="p-3 text-red-600">{item.data.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">掲載許可待ち画像 (Pending Permission)</h2>
        <div className="bg-white rounded border overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Key</th>
                <th className="p-3">Source</th>
                <th className="p-3">Status / Permission</th>
                <th className="p-3">Note</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {pendingPermissionImages.map((img, i) => img.data && (
                <tr key={i}>
                  <td className="p-3 font-mono text-xs">{img.key}</td>
                  <td className="p-3 max-w-xs truncate">{img.data.src}</td>
                  <td className="p-3">
                    <span className="inline-block px-2 py-1 text-xs rounded bg-gray-200 mr-2">{img.data.status}</span>
                    <span className="inline-block px-2 py-1 text-xs rounded bg-yellow-200 text-yellow-800">{img.data.permissionStatus}</span>
                  </td>
                  <td className="p-3 text-red-600">{img.data.permissionNote || img.data.credit || img.data.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 border-b pb-2">出典未登録データ (Missing Source)</h2>
        <div className="bg-white rounded border overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Key</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {missingSourceItems.map((item, i) => (
                <tr key={i}>
                  <td className="p-3 font-mono text-xs">{item.key}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
