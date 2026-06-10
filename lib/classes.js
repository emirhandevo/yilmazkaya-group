// =============================================================================
// TAILWIND CLASS SABİTLERİ — tüm site buradan
// Stil değişecekse önce bu dosyaya bak (Navbar/Footer kendi dosyasında kalır)
// =============================================================================

// -----------------------------------------------------------------------------
// SHARED — site geneli (sayfa, başlık, buton, form, iletişim linkleri)
// -----------------------------------------------------------------------------

export const pageSectionClass = "bg-background px-[10%] py-16 md:py-24";

export const pageSectionCompactClass = "bg-background px-[10%] py-16 md:py-20";

export const pageContainerClass = "mx-auto max-w-5xl";

export const pageContainerNarrowClass = "max-w-4xl";

export const pageContainerCenteredClass = "mx-auto max-w-3xl text-center";

export const sectionLabelClass =
  "text-sm font-semibold uppercase tracking-widest text-accent";

export const sectionTitleClass =
  "mt-4 text-3xl font-bold text-text md:text-4xl";

export const sectionTitleTightClass =
  "mt-3 text-3xl font-bold text-text md:text-4xl";

export const subsectionTitleClass =
  "text-2xl font-bold text-text md:text-3xl";

export const sectionBodyClass =
  "mt-4 text-base leading-relaxed text-text-muted md:text-lg";

export const sectionBodyPlainClass =
  "text-base leading-relaxed text-text-muted md:text-lg";

export const accentButtonClass =
  "inline-block rounded-md bg-accent px-8 py-3 text-sm font-semibold text-white transition-all border border-transparent hover:border-accent hover:bg-zinc-800 active:scale-[0.98] active:bg-zinc-900";

export const accentButtonSmallClass =
  "inline-block rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-all border border-transparent hover:border-accent hover:bg-zinc-800 active:scale-[0.98] active:bg-zinc-900";

export const accentButtonFitClass =
  "rounded-md bg-accent px-4 py-2 text-sm text-white transition-all w-fit border border-transparent hover:border-accent hover:bg-zinc-800 active:scale-[0.98] active:bg-zinc-900";

export const contactLinkClass =
  "flex items-center gap-3 text-text-muted transition-colors hover:text-accent";

export const contactLinkStartClass =
  "flex items-start gap-3 text-text-muted transition-colors hover:text-accent";

export const inputClass =
  "w-full rounded-md border border-zinc-200 bg-background px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

export const fileInputClass =
  "w-full rounded-md border border-zinc-200 bg-background px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 file:mr-4 file:cursor-pointer file:rounded-md file:border file:border-transparent file:bg-accent file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white file:transition-all file:duration-200 hover:file:border-accent hover:file:bg-zinc-800 active:file:scale-[0.98] active:file:bg-zinc-900";

// -----------------------------------------------------------------------------
// KURUMSAL — Hakkımızda, Misyon-Vizyon, Değerlerimiz
// -----------------------------------------------------------------------------

export const kurumsalPageClass = pageSectionClass;
export const kurumsalContainerClass = pageContainerClass;
export const kurumsalContainerNarrowClass = "mx-auto max-w-4xl";
export const kurumsalLabelClass = sectionLabelClass;
export const kurumsalTitleClass = sectionTitleClass;
export const kurumsalIntroClass = sectionBodyClass;
export const kurumsalBodyClass = sectionBodyPlainClass;

const kurumsalCardBaseClass =
  "group rounded-lg border border-zinc-200 bg-surface shadow-xl transition-all hover:shadow-black";

const kurumsalCardTitleBaseClass =
  "font-bold text-text transition-colors group-hover:text-accent";

export const missionVisionGridClass =
  "mt-12 grid gap-10 md:grid-cols-2 md:gap-12";

export const missionVisionCardClass = `${kurumsalCardBaseClass} p-8`;

export const missionVisionCardTitleClass = `${kurumsalCardTitleBaseClass} text-xl md:text-2xl`;

export const missionVisionCardTextClass = sectionBodyClass;

export const valueGridClass =
  "mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3";

export const valueCardClass = `${kurumsalCardBaseClass} p-6`;

export const valueCardTitleClass = `${kurumsalCardTitleBaseClass} text-lg md:text-xl`;

export const valueCardTextClass =
  "mt-3 text-sm leading-relaxed text-text-muted md:text-base";

// -----------------------------------------------------------------------------
// HOME — ana sayfa section'ları (Hero hariç)
// -----------------------------------------------------------------------------

export const introSectionClass = pageSectionClass;

export const activitySectionClass = "bg-surface px-[10%] py-16 md:py-24";

export const activityHeaderClass = "mb-10 max-w-4xl";

export const activityGridClass =
  "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3";

export const activityCardLinkClass =
  "group relative flex h-full w-full flex-col overflow-hidden rounded-lg border border-zinc-200 bg-background shadow-black transition-shadow hover:shadow-lg";

export const activityCardImageWrapperClass =
  "relative h-44 w-full overflow-hidden";

export const activityCardImageClass =
  "object-cover transition-transform duration-500 group-hover:scale-105";

export const activityCardBodyClass = "flex flex-1 flex-col p-5";

export const activityCardTitleClass =
  "text-lg font-semibold text-text group-hover:text-accent";

export const activityCardTextClass =
  "mt-2 flex-1 text-sm leading-relaxed text-text-muted";

export const activityCardCtaClass = "mt-4 text-sm font-medium text-accent";

export const statsSectionClass = "mb-10 bg-primary px-[10%] py-16 md:py-20";

export const statsGridClass =
  "grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6";

export const statsValueClass = "text-3xl font-bold text-accent md:text-4xl";

export const statsLabelClass = "mt-2 text-sm text-zinc-300 md:text-base";

export const statsDividerClass = "mt-10 h-px w-full bg-accent";

export const ctaSectionClass = pageSectionCompactClass;
