"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ChevronRight, AlertCircle } from "lucide-react";
import { clsx } from "clsx";

type FormState = "input" | "confirm" | "complete";

type FormData = {
  type: string;
  company: string;
  department: string;
  name: string;
  furigana: string;
  email: string;
  phone: string;
  zip: string;
  address: string;
  message: string;
  agreed: boolean;
};

const initialData: FormData = {
  type: "",
  company: "",
  department: "",
  name: "",
  furigana: "",
  email: "",
  phone: "",
  zip: "",
  address: "",
  message: "",
  agreed: false,
};

type Errors = Partial<Record<keyof FormData, string>>;

type InputFieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  data: FormData;
  setData: (data: FormData) => void;
  errors: Errors;
};

function InputField({ label, name, type = "text", required = false, placeholder = "", data, setData, errors }: InputFieldProps) {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-sm font-bold text-foreground mb-2">
        {label}
        {required ? (
          <span className="ml-2 bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded">必須</span>
        ) : (
          <span className="ml-2 bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded">任意</span>
        )}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={data[name as keyof FormData] as string}
        onChange={e => setData({ ...data, [name]: e.target.value })}
        className={clsx(
          "w-full px-4 py-3 rounded-md border focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-shadow",
          errors[name as keyof FormData] ? "border-red-500 bg-red-50" : "border-border bg-white"
        )}
        placeholder={placeholder}
        aria-invalid={!!errors[name as keyof FormData]}
        aria-describedby={errors[name as keyof FormData] ? `${name}-error` : undefined}
      />
      {errors[name as keyof FormData] && (
        <p id={`${name}-error`} className="text-red-600 text-sm mt-1 flex items-center gap-1">
          <AlertCircle size={14} />
          {errors[name as keyof FormData]}
        </p>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("input");
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Errors = {};
    if (!data.type) newErrors.type = "お問い合わせ種別を選択してください。";
    if (!data.name.trim()) newErrors.name = "氏名を入力してください。";
    if (!data.furigana.trim()) newErrors.furigana = "ふりがなを入力してください。";
    if (!data.email.trim()) {
      newErrors.email = "メールアドレスを入力してください。";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "正しいメールアドレスの形式で入力してください。";
    }
    if (!data.phone.trim()) {
      newErrors.phone = "電話番号を入力してください。";
    } else if (!/^[0-9-]{10,}$/.test(data.phone)) {
      newErrors.phone = "正しい電話番号を入力してください。";
    }
    if (!data.message.trim()) newErrors.message = "お問い合わせ内容を入力してください。";
    if (!data.agreed) newErrors.agreed = "個人情報保護方針への同意が必要です。";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setFormState("confirm");
      window.scrollTo(0, 0);
    } else {
      const firstError = document.querySelector('[aria-invalid="true"]');
      if (firstError instanceof HTMLElement) {
        firstError.focus();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Since destination is undefined, log to console in development
      if (process.env.NODE_ENV === "development") {
        console.log("Dummy Submission Payload:", data);
      }

      setFormState("complete");
      setData(initialData); // Clear data
      window.scrollTo(0, 0);
    } catch (_err) {
      setSubmitError("送信に失敗しました。しばらく経ってから再度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <section className="bg-foreground text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">お問い合わせ</h1>
          <p className="text-gray-300 text-lg font-inter">Contact</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          
          {/* Progress Bar */}
          <div className="flex items-center justify-center mb-12">
            <div className={clsx("text-sm font-bold flex flex-col items-center", formState === "input" ? "text-brand" : "text-muted")}>
              <div className={clsx("w-8 h-8 rounded-full flex items-center justify-center mb-2", formState === "input" ? "bg-brand text-white" : "bg-surface-accent text-brand")}>1</div>
              入力
            </div>
            <div className="w-16 h-1 mx-2 bg-surface-accent relative top-[-10px]">
              <div className={clsx("h-full bg-brand transition-all", formState === "input" ? "w-0" : "w-full")} />
            </div>
            <div className={clsx("text-sm font-bold flex flex-col items-center", formState === "confirm" ? "text-brand" : "text-muted")}>
              <div className={clsx("w-8 h-8 rounded-full flex items-center justify-center mb-2", formState === "confirm" ? "bg-brand text-white" : "bg-surface-accent text-brand")}>2</div>
              確認
            </div>
            <div className="w-16 h-1 mx-2 bg-surface-accent relative top-[-10px]">
              <div className={clsx("h-full bg-brand transition-all", formState === "complete" ? "w-full" : "w-0")} />
            </div>
            <div className={clsx("text-sm font-bold flex flex-col items-center", formState === "complete" ? "text-brand" : "text-muted")}>
              <div className={clsx("w-8 h-8 rounded-full flex items-center justify-center mb-2", formState === "complete" ? "bg-brand text-white" : "bg-surface-accent text-brand")}>3</div>
              完了
            </div>
          </div>

          {formState === "input" && (
            <div className="bg-white p-6 md:p-10 rounded-lg shadow-sm border border-border">
              <p className="mb-8 text-foreground/80 leading-relaxed">
                以下のフォームに必要事項をご記入の上、「確認画面へ進む」ボタンをクリックしてください。
                <br />ご記入いただいた個人情報は、お問い合わせへの回答目的以外には使用いたしません。
              </p>

              <form onSubmit={handleConfirm} noValidate>
                <div className="mb-6">
                  <label htmlFor="type" className="block text-sm font-bold text-foreground mb-2">
                    お問い合わせ種別
                    <span className="ml-2 bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded">必須</span>
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={data.type}
                    onChange={e => setData({ ...data, type: e.target.value })}
                    className={clsx(
                      "w-full px-4 py-3 rounded-md border focus:ring-2 focus:ring-brand focus:border-brand outline-none bg-white",
                      errors.type ? "border-red-500 bg-red-50" : "border-border"
                    )}
                    aria-invalid={!!errors.type}
                    aria-describedby={errors.type ? "type-error" : undefined}
                  >
                    <option value="">選択してください</option>
                    <option value="商品に関するお問い合わせ">商品に関するお問い合わせ</option>
                    <option value="出荷、お取引希望">出荷、お取引希望</option>
                    <option value="ホームページに関するお問い合わせ">ホームページに関するお問い合わせ</option>
                    <option value="事業に関するお問い合わせ">事業に関するお問い合わせ</option>
                    <option value="採用に関するお問い合わせ">採用に関するお問い合わせ</option>
                    <option value="その他">その他</option>
                  </select>
                  {errors.type && (
                    <p id="type-error" className="text-red-600 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} />{errors.type}
                    </p>
                  )}
                </div>

                <InputField label="会社名" name="company" placeholder="例：株式会社東京青果" data={data} setData={setData} errors={errors} />
                <InputField label="部署名" name="department" placeholder="例：営業部" data={data} setData={setData} errors={errors} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField label="氏名" name="name" required placeholder="例：山田 太郎" data={data} setData={setData} errors={errors} />
                  <InputField label="ふりがな" name="furigana" required placeholder="例：やまだ たろう" data={data} setData={setData} errors={errors} />
                </div>

                <InputField label="メールアドレス" name="email" type="email" required placeholder="例：info@example.com" data={data} setData={setData} errors={errors} />
                <InputField label="電話番号" name="phone" type="tel" required placeholder="例：03-1234-5678" data={data} setData={setData} errors={errors} />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-1">
                    <InputField label="郵便番号" name="zip" placeholder="例：104-0045" data={data} setData={setData} errors={errors} />
                  </div>
                  <div className="md:col-span-2">
                    <InputField label="住所" name="address" placeholder="例：東京都中央区築地6-23-7" data={data} setData={setData} errors={errors} />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">
                    お問い合わせ内容
                    <span className="ml-2 bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded">必須</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={data.message}
                    onChange={e => setData({ ...data, message: e.target.value })}
                    className={clsx(
                      "w-full px-4 py-3 rounded-md border focus:ring-2 focus:ring-brand focus:border-brand outline-none resize-y",
                      errors.message ? "border-red-500 bg-red-50" : "border-border bg-white"
                    )}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-600 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} />{errors.message}
                    </p>
                  )}
                </div>

                <div className="mb-10 bg-surface p-6 rounded-lg border border-border">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={data.agreed}
                      onChange={e => setData({ ...data, agreed: e.target.checked })}
                      className="mt-1 w-5 h-5 text-brand focus:ring-brand rounded border-gray-300"
                    />
                    <div>
                      <span className="text-sm font-bold text-foreground">
                        <Link href="/privacy" className="text-brand hover:underline" target="_blank">個人情報保護方針</Link>
                        に同意する
                        <span className="ml-2 bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded font-normal">必須</span>
                      </span>
                      {errors.agreed && (
                        <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle size={14} />{errors.agreed}
                        </p>
                      )}
                    </div>
                  </label>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-brand hover:bg-brand-dark text-white px-10 py-4 rounded-md font-bold transition-colors inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
                  >
                    確認画面へ進む
                    <ChevronRight size={20} />
                  </button>
                </div>
              </form>
            </div>
          )}

          {formState === "confirm" && (
            <div className="bg-white p-6 md:p-10 rounded-lg shadow-sm border border-border">
              <p className="mb-8 text-foreground/80 text-center font-bold">
                以下の内容で送信します。よろしければ「送信する」ボタンをクリックしてください。
              </p>

              {submitError && (
                <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-md text-red-700 flex items-start gap-2">
                  <AlertCircle size={20} className="shrink-0 mt-0.5" />
                  <p>{submitError}</p>
                </div>
              )}

              <dl className="divide-y divide-border border-y border-border mb-10">
                <div className="py-4 flex flex-col md:flex-row gap-2 md:gap-8">
                  <dt className="md:w-1/3 font-bold text-foreground shrink-0 bg-surface p-3 rounded-md">お問い合わせ種別</dt>
                  <dd className="md:w-2/3 text-foreground/90 p-3">{data.type}</dd>
                </div>
                <div className="py-4 flex flex-col md:flex-row gap-2 md:gap-8">
                  <dt className="md:w-1/3 font-bold text-foreground shrink-0 bg-surface p-3 rounded-md">会社名</dt>
                  <dd className="md:w-2/3 text-foreground/90 p-3">{data.company || "-"}</dd>
                </div>
                <div className="py-4 flex flex-col md:flex-row gap-2 md:gap-8">
                  <dt className="md:w-1/3 font-bold text-foreground shrink-0 bg-surface p-3 rounded-md">部署名</dt>
                  <dd className="md:w-2/3 text-foreground/90 p-3">{data.department || "-"}</dd>
                </div>
                <div className="py-4 flex flex-col md:flex-row gap-2 md:gap-8">
                  <dt className="md:w-1/3 font-bold text-foreground shrink-0 bg-surface p-3 rounded-md">氏名</dt>
                  <dd className="md:w-2/3 text-foreground/90 p-3">{data.name}</dd>
                </div>
                <div className="py-4 flex flex-col md:flex-row gap-2 md:gap-8">
                  <dt className="md:w-1/3 font-bold text-foreground shrink-0 bg-surface p-3 rounded-md">ふりがな</dt>
                  <dd className="md:w-2/3 text-foreground/90 p-3">{data.furigana}</dd>
                </div>
                <div className="py-4 flex flex-col md:flex-row gap-2 md:gap-8">
                  <dt className="md:w-1/3 font-bold text-foreground shrink-0 bg-surface p-3 rounded-md">メールアドレス</dt>
                  <dd className="md:w-2/3 text-foreground/90 p-3">{data.email}</dd>
                </div>
                <div className="py-4 flex flex-col md:flex-row gap-2 md:gap-8">
                  <dt className="md:w-1/3 font-bold text-foreground shrink-0 bg-surface p-3 rounded-md">電話番号</dt>
                  <dd className="md:w-2/3 text-foreground/90 p-3">{data.phone}</dd>
                </div>
                <div className="py-4 flex flex-col md:flex-row gap-2 md:gap-8">
                  <dt className="md:w-1/3 font-bold text-foreground shrink-0 bg-surface p-3 rounded-md">郵便番号</dt>
                  <dd className="md:w-2/3 text-foreground/90 p-3">{data.zip || "-"}</dd>
                </div>
                <div className="py-4 flex flex-col md:flex-row gap-2 md:gap-8">
                  <dt className="md:w-1/3 font-bold text-foreground shrink-0 bg-surface p-3 rounded-md">住所</dt>
                  <dd className="md:w-2/3 text-foreground/90 p-3">{data.address || "-"}</dd>
                </div>
                <div className="py-4 flex flex-col md:flex-row gap-2 md:gap-8">
                  <dt className="md:w-1/3 font-bold text-foreground shrink-0 bg-surface p-3 rounded-md">お問い合わせ内容</dt>
                  <dd className="md:w-2/3 text-foreground/90 p-3 whitespace-pre-line">{data.message}</dd>
                </div>
              </dl>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="button"
                  onClick={() => { setFormState("input"); window.scrollTo(0,0); }}
                  disabled={isSubmitting}
                  className="px-8 py-4 rounded-md font-bold text-foreground bg-surface border border-border hover:bg-gray-100 transition-colors disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  入力画面に戻る
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-brand hover:bg-brand-dark text-white px-10 py-4 rounded-md font-bold transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand shadow-sm"
                >
                  {isSubmitting ? "送信中..." : "送信する"}
                  {!isSubmitting && <CheckCircle2 size={20} />}
                </button>
              </div>
            </div>
          )}

          {formState === "complete" && (
            <div className="bg-white p-8 md:p-16 rounded-lg shadow-sm border border-border text-center">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">お問い合わせが完了しました</h2>
              <p className="text-foreground/80 leading-relaxed mb-10 max-w-lg mx-auto">
                お問い合わせいただき、誠にありがとうございます。
                <br />ご入力いただいたメールアドレス宛に自動返信メールを送信いたしました。
                <br />担当者より順次ご連絡させていただきますので、今しばらくお待ちください。
              </p>
              <Link 
                href="/"
                className="inline-block bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
              >
                トップページへ戻る
              </Link>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
