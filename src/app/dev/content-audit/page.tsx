import { companyData, locationsData, advantageData } from "@/lib/content/repository";
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
    { key: "otaProcessingArea", data: advantageData.otaProcessingArea },
    { key: "partnerRegionsCount", data: advantageData.partnerRegionsCount },
    { key: "shareholderStatus", data: advantageData.shareholderStatus },
    { key: "testKitchenStatus", data: advantageData.testKitchenStatus },
    { key: "brandSupportStatus", data: advantageData.brandSupportStatus },
  ];

  const pendingItems = allData.filter(item => item.data.status === "pending");
  const missingSourceItems = allData.filter(item => !item.data.source);
  
  const images: { key: string; data: ImageAsset }[] = [
    { key: "presidentImage", data: companyData.presidentImage },
  ];
  const placeholderImages = images.filter(img => img.data.status === "placeholder");

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
        <h2 className="text-xl font-bold mb-4 border-b pb-2">仮画像一覧 (Placeholder)</h2>
        <div className="bg-white rounded border overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Key</th>
                <th className="p-3">Source</th>
                <th className="p-3">Credit/Note</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {placeholderImages.map((img, i) => (
                <tr key={i}>
                  <td className="p-3 font-mono text-xs">{img.key}</td>
                  <td className="p-3">{img.data.src}</td>
                  <td className="p-3 text-red-600">{img.data.credit}</td>
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
