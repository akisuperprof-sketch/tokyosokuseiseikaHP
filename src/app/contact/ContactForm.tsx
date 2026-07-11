"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ChevronRight, AlertCircle, Mail } from "lucide-react";
import { clsx } from "clsx";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

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
    <div className="mb-8">
      <label htmlFor={name} className="flex items-center text-sm font-bold text-foreground mb-3 font-serif">
        {label}
        {required ? (
          <span className="ml-3 bg-accent text-white text-[10px] tracking-widest px-2 py-0.5 rounded-sm">必須</span>
        ) : (
          <span className="ml-3 bg-surface-strong text-foreground-muted text-[10px] tracking-widest px-2 py-0.5 rounded-sm">任意</span>
        )}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={data[name as keyof FormData] as string}
        onChange={e => setData({ ...data, [name]: e.target.value })}
        className={clsx(
          "w-full px-5 py-4 rounded-md border focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all duration-300",
          errors[name as keyof FormData] ? "border-red-500 bg-red-50/50" : "border-border/60 bg-surface focus:bg-white"
        )}
        placeholder={placeholder}
        aria-invalid={!!errors[name as keyof FormData]}
        aria-describedby={errors[name as keyof FormData] ? `${name}-error` : undefined}
      />
      {errors[name as keyof FormData] && (
        <p id={`${name}-error`} className="text-red-600 text-sm mt-2 flex items-center gap-1.5 font-medium">
          <AlertCircle size={16} />
          {errors[name as keyof FormData]}
        </p>
      )}
    </div>
  );
}

export default function ContactForm({ enabled }: { enabled: boolean }) {
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
    if (!enabled) return;
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
    if (isSubmitting || !enabled) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      if (process.env.NODE_ENV === "development") {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Dummy Submission Payload:", data);
        setFormState("complete");
        setData(initialData);
        window.scrollTo(0, 0);
      } else {
        // In production, we don't mock it. If enabled is true but API is not built, fail.
        throw new Error("メール送信APIが設定されていません。");
      }
    } catch {
      setSubmitError("送信に失敗しました。しばらく経ってから再度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <PageHero
        title="お問い合わせ"
        subtitle="Contact"
        description="ご意見・ご質問、お取引に関するお問い合わせは、以下のフォームよりお気軽にご連絡ください。"
        backgroundImage="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80"
      />

      <section className="py-24 bg-background">
        <Container className="max-w-4xl">
          
          {/* Progress Bar */}
          <Reveal>
            <div className="flex items-center justify-center mb-16 px-4">
              <div className={clsx("text-sm font-bold flex flex-col items-center tracking-widest transition-colors duration-500", formState === "input" ? "text-brand" : "text-foreground-muted")}>
                <div className={clsx("w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-colors duration-500", formState === "input" ? "bg-brand text-white shadow-md" : "bg-surface-strong text-foreground-muted")}>1</div>
                入力
              </div>
              <div className="w-20 h-0.5 mx-4 bg-surface-strong relative top-[-14px] rounded-full overflow-hidden">
                <div className={clsx("h-full bg-brand transition-all duration-1000 ease-in-out", formState === "input" ? "w-0" : "w-full")} />
              </div>
              <div className={clsx("text-sm font-bold flex flex-col items-center tracking-widest transition-colors duration-500", formState === "confirm" ? "text-brand" : "text-foreground-muted")}>
                <div className={clsx("w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-colors duration-500", formState === "confirm" ? "bg-brand text-white shadow-md" : "bg-surface-strong text-foreground-muted")}>2</div>
                確認
              </div>
              <div className="w-20 h-0.5 mx-4 bg-surface-strong relative top-[-14px] rounded-full overflow-hidden">
                <div className={clsx("h-full bg-brand transition-all duration-1000 ease-in-out", formState === "complete" ? "w-full" : "w-0")} />
              </div>
              <div className={clsx("text-sm font-bold flex flex-col items-center tracking-widest transition-colors duration-500", formState === "complete" ? "text-brand" : "text-foreground-muted")}>
                <div className={clsx("w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-colors duration-500", formState === "complete" ? "bg-brand text-white shadow-md" : "bg-surface-strong text-foreground-muted")}>3</div>
                完了
              </div>
            </div>
          </Reveal>

          {formState === "input" && (
            <Reveal delay={100}>
              <div className="bg-white p-8 md:p-16 rounded-2xl shadow-lg border border-border relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
                
                <div className="relative z-10">
                  {!enabled && (
                    <div className="mb-10 p-8 bg-red-50/50 border border-red-200 rounded-xl text-center">
                      <p className="text-red-700 font-bold text-xl mb-3 font-serif">お問い合わせフォームは現在準備中です</p>
                      <p className="text-red-600/80 leading-relaxed">
                        恐れ入りますが、お急ぎの場合は各拠点（築地本社・大田営業部・大阪営業部）へ<br className="hidden md:block" />直接お電話にてお問い合わせください。
                      </p>
                    </div>
                  )}
                  <p className="mb-12 text-foreground-muted leading-relaxed text-center font-medium">
                    以下のフォームに必要事項をご記入の上、「確認画面へ進む」ボタンをクリックしてください。
                    <br />ご記入いただいた個人情報は、お問い合わせへの回答目的以外には使用いたしません。
                  </p>

                  <form onSubmit={handleConfirm} noValidate>
                    <div className="mb-8">
                      <label htmlFor="type" className="flex items-center text-sm font-bold text-foreground mb-3 font-serif">
                        お問い合わせ種別
                        <span className="ml-3 bg-accent text-white text-[10px] tracking-widest px-2 py-0.5 rounded-sm">必須</span>
                      </label>
                      <div className="relative">
                        <select
                          id="type"
                          name="type"
                          value={data.type}
                          onChange={e => setData({ ...data, type: e.target.value })}
                          className={clsx(
                            "w-full px-5 py-4 rounded-md border focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all duration-300 appearance-none bg-surface focus:bg-white",
                            errors.type ? "border-red-500 bg-red-50/50" : "border-border/60"
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
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-foreground-muted">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                      {errors.type && (
                        <p id="type-error" className="text-red-600 text-sm mt-2 flex items-center gap-1.5 font-medium">
                          <AlertCircle size={16} />{errors.type}
                        </p>
                      )}
                    </div>

                    <InputField label="会社名" name="company" placeholder="例：株式会社東京青果" data={data} setData={setData} errors={errors} />
                    <InputField label="部署名" name="department" placeholder="例：営業部" data={data} setData={setData} errors={errors} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                      <InputField label="氏名" name="name" required placeholder="例：山田 太郎" data={data} setData={setData} errors={errors} />
                      <InputField label="ふりがな" name="furigana" required placeholder="例：やまだ たろう" data={data} setData={setData} errors={errors} />
                    </div>

                    <InputField label="メールアドレス" name="email" type="email" required placeholder="例：info@example.com" data={data} setData={setData} errors={errors} />
                    <InputField label="電話番号" name="phone" type="tel" required placeholder="例：03-1234-5678" data={data} setData={setData} errors={errors} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6">
                      <div className="md:col-span-1">
                        <InputField label="郵便番号" name="zip" placeholder="例：104-0045" data={data} setData={setData} errors={errors} />
                      </div>
                      <div className="md:col-span-2">
                        <InputField label="住所" name="address" placeholder="例：東京都中央区築地6-23-7" data={data} setData={setData} errors={errors} />
                      </div>
                    </div>

                    <div className="mb-10">
                      <label htmlFor="message" className="flex items-center text-sm font-bold text-foreground mb-3 font-serif">
                        お問い合わせ内容
                        <span className="ml-3 bg-accent text-white text-[10px] tracking-widest px-2 py-0.5 rounded-sm">必須</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={8}
                        value={data.message}
                        onChange={e => setData({ ...data, message: e.target.value })}
                        className={clsx(
                          "w-full px-5 py-4 rounded-md border focus:ring-2 focus:ring-brand focus:border-brand outline-none resize-y transition-all duration-300",
                          errors.message ? "border-red-500 bg-red-50/50" : "border-border/60 bg-surface focus:bg-white"
                        )}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-red-600 text-sm mt-2 flex items-center gap-1.5 font-medium">
                          <AlertCircle size={16} />{errors.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-12 bg-surface p-8 rounded-xl border border-border/50 text-center">
                      <label className="inline-flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            checked={data.agreed}
                            onChange={e => setData({ ...data, agreed: e.target.checked })}
                            className="peer w-6 h-6 text-brand focus:ring-brand rounded border-gray-300 transition-all cursor-pointer opacity-0 absolute inset-0 z-10"
                          />
                          <div className={clsx(
                            "w-6 h-6 rounded border-2 flex items-center justify-center transition-all",
                            data.agreed ? "bg-brand border-brand" : "bg-white border-gray-300 group-hover:border-brand/50"
                          )}>
                            {data.agreed && <CheckCircle2 size={16} className="text-white" />}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm font-bold text-foreground mr-3">
                            <Link href="/privacy" className="text-brand hover:text-brand-dark hover:underline underline-offset-4 transition-colors" target="_blank">個人情報保護方針</Link>
                            に同意する
                          </span>
                          <span className="bg-accent text-white text-[10px] tracking-widest px-2 py-0.5 rounded-sm font-bold">必須</span>
                        </div>
                      </label>
                      {errors.agreed && (
                        <p className="text-red-600 text-sm mt-4 flex items-center justify-center gap-1.5 font-medium">
                          <AlertCircle size={16} />{errors.agreed}
                        </p>
                      )}
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        disabled={!enabled}
                        className="bg-brand hover:bg-[#132219] text-white px-12 py-4 rounded-sm font-bold tracking-widest transition-all inline-flex items-center justify-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1 hover:shadow-lg w-full md:w-auto min-w-[280px]"
                      >
                        確認画面へ進む
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Reveal>
          )}

          {formState === "confirm" && (
            <Reveal>
              <div className="bg-white p-8 md:p-16 rounded-2xl shadow-lg border border-border">
                <div className="text-center mb-12">
                  <h2 className="text-2xl font-bold font-serif mb-4 text-foreground">入力内容の確認</h2>
                  <p className="text-foreground-muted">
                    以下の内容で送信します。よろしければ「送信する」ボタンをクリックしてください。
                  </p>
                </div>

                {submitError && (
                  <div className="mb-10 p-5 bg-red-50/80 border border-red-200 rounded-lg text-red-700 flex items-start gap-3">
                    <AlertCircle size={24} className="shrink-0 mt-0.5" />
                    <p className="font-medium">{submitError}</p>
                  </div>
                )}

                <dl className="divide-y divide-border/50 border-y border-border/50 mb-12">
                  <div className="py-6 flex flex-col md:flex-row gap-4 md:gap-8 hover:bg-surface-muted transition-colors px-4 rounded-md">
                    <dt className="md:w-1/3 font-bold text-foreground shrink-0 text-sm tracking-widest flex items-center">お問い合わせ種別</dt>
                    <dd className="md:w-2/3 text-foreground font-medium">{data.type}</dd>
                  </div>
                  <div className="py-6 flex flex-col md:flex-row gap-4 md:gap-8 hover:bg-surface-muted transition-colors px-4 rounded-md">
                    <dt className="md:w-1/3 font-bold text-foreground shrink-0 text-sm tracking-widest flex items-center">会社名</dt>
                    <dd className="md:w-2/3 text-foreground font-medium">{data.company || <span className="text-muted">-</span>}</dd>
                  </div>
                  <div className="py-6 flex flex-col md:flex-row gap-4 md:gap-8 hover:bg-surface-muted transition-colors px-4 rounded-md">
                    <dt className="md:w-1/3 font-bold text-foreground shrink-0 text-sm tracking-widest flex items-center">部署名</dt>
                    <dd className="md:w-2/3 text-foreground font-medium">{data.department || <span className="text-muted">-</span>}</dd>
                  </div>
                  <div className="py-6 flex flex-col md:flex-row gap-4 md:gap-8 hover:bg-surface-muted transition-colors px-4 rounded-md">
                    <dt className="md:w-1/3 font-bold text-foreground shrink-0 text-sm tracking-widest flex items-center">氏名</dt>
                    <dd className="md:w-2/3 text-foreground font-medium">{data.name}</dd>
                  </div>
                  <div className="py-6 flex flex-col md:flex-row gap-4 md:gap-8 hover:bg-surface-muted transition-colors px-4 rounded-md">
                    <dt className="md:w-1/3 font-bold text-foreground shrink-0 text-sm tracking-widest flex items-center">ふりがな</dt>
                    <dd className="md:w-2/3 text-foreground font-medium">{data.furigana}</dd>
                  </div>
                  <div className="py-6 flex flex-col md:flex-row gap-4 md:gap-8 hover:bg-surface-muted transition-colors px-4 rounded-md">
                    <dt className="md:w-1/3 font-bold text-foreground shrink-0 text-sm tracking-widest flex items-center">メールアドレス</dt>
                    <dd className="md:w-2/3 text-foreground font-medium font-inter">{data.email}</dd>
                  </div>
                  <div className="py-6 flex flex-col md:flex-row gap-4 md:gap-8 hover:bg-surface-muted transition-colors px-4 rounded-md">
                    <dt className="md:w-1/3 font-bold text-foreground shrink-0 text-sm tracking-widest flex items-center">電話番号</dt>
                    <dd className="md:w-2/3 text-foreground font-medium font-inter">{data.phone}</dd>
                  </div>
                  <div className="py-6 flex flex-col md:flex-row gap-4 md:gap-8 hover:bg-surface-muted transition-colors px-4 rounded-md">
                    <dt className="md:w-1/3 font-bold text-foreground shrink-0 text-sm tracking-widest flex items-center">郵便番号</dt>
                    <dd className="md:w-2/3 text-foreground font-medium font-inter">{data.zip || <span className="text-muted">-</span>}</dd>
                  </div>
                  <div className="py-6 flex flex-col md:flex-row gap-4 md:gap-8 hover:bg-surface-muted transition-colors px-4 rounded-md">
                    <dt className="md:w-1/3 font-bold text-foreground shrink-0 text-sm tracking-widest flex items-center">住所</dt>
                    <dd className="md:w-2/3 text-foreground font-medium">{data.address || <span className="text-muted">-</span>}</dd>
                  </div>
                  <div className="py-6 flex flex-col md:flex-row gap-4 md:gap-8 hover:bg-surface-muted transition-colors px-4 rounded-md">
                    <dt className="md:w-1/3 font-bold text-foreground shrink-0 text-sm tracking-widest pt-2">お問い合わせ内容</dt>
                    <dd className="md:w-2/3 text-foreground font-medium whitespace-pre-line leading-relaxed p-4 bg-surface rounded-lg">{data.message}</dd>
                  </div>
                </dl>

                <div className="flex flex-col-reverse sm:flex-row gap-4 justify-center items-center">
                  <button
                    type="button"
                    onClick={() => { setFormState("input"); window.scrollTo(0,0); }}
                    disabled={isSubmitting}
                    className="px-8 py-4 rounded-sm font-bold tracking-widest text-foreground bg-white border-2 border-border hover:border-brand hover:text-brand transition-all duration-300 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 w-full sm:w-auto min-w-[200px]"
                  >
                    入力画面に戻る
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-brand hover:bg-[#132219] text-white px-10 py-4 rounded-sm font-bold tracking-widest transition-all duration-300 inline-flex items-center justify-center gap-3 disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand shadow-lg hover:-translate-y-1 w-full sm:w-auto min-w-[280px]"
                  >
                    {isSubmitting ? "送信中..." : "送信する"}
                    {!isSubmitting && <Mail size={18} />}
                  </button>
                </div>
              </div>
            </Reveal>
          )}

          {formState === "complete" && (
            <Reveal>
              <div className="bg-white p-10 md:p-20 rounded-2xl shadow-lg border border-border text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6 font-serif tracking-wide">お問い合わせが完了しました</h2>
                  <p className="text-foreground-muted leading-relaxed mb-12 max-w-xl mx-auto text-lg">
                    お問い合わせいただき、誠にありがとうございます。
                    <br />ご入力いただいたメールアドレス宛に自動返信メールを送信いたしました。
                    <br />担当者より順次ご連絡させていただきますので、今しばらくお待ちください。
                  </p>
                  <Link 
                    href="/"
                    className="inline-block bg-brand hover:bg-[#132219] text-white px-10 py-4 rounded-sm font-bold tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand hover:-translate-y-1 shadow-lg"
                  >
                    トップページへ戻る
                  </Link>
                </div>
              </div>
            </Reveal>
          )}

        </Container>
      </section>
    </div>
  );
}
