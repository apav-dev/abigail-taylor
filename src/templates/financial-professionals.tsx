import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import FinProAbout from "../components/FinProAbout";
import FinProHeader from "../components/FinProHeader";
import FinProHero from "../components/FinProHero";
import FinProNav from "../components/FinProNav";
import MainLayout from "../components/MainLayout";
import "../index.css";
import BlogSection from "../components/BlogSection";

export const config: TemplateConfig = {
  stream: {
    $id: "fin-pro",
    localization: { locales: ["en"] },
    fields: [
      "mainPhone",
      "c_primaryEmail",
      "yextDisplayCoordinate",
      "name",
      "c_jobTitle",
      "address",
      "headshot",
      "description",
      "slug",
      "c_featuredBlogs.name",
      "c_featuredBlogs.slug",
      "c_featuredBlogs.c_coverPhoto",
      "c_featuredBlogs.c_publishDate",
      "c_featuredBlogs.c_shortDescription",
      "c_featuredBlogs.c_author",
    ],
    filter: { entityIds: ["FP-0913"] },
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.entityId.toString();
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (
  data
): HeadConfig => {
  return {
    title: "Blog Home",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

export default function Blog({ document }: TemplateProps) {
  return (
    <>
      <MainLayout backgroundColor="#FFFFFF">
        <FinProHeader />
        <FinProHero
          name={`${document.name}`}
          title={`${document.c_jobTitle}`}
          address={{
            line1: `${document.address.line1}`,
            line2: ``,
            city: `${document.address.city}`,
            region: `${document.address.region}`,
            postalCode: `${document.address.postalCode}`,
          }}
          phone={`${document.mainPhone}`}
          headshotUrl={`${document.headshot.url}`}
        />
        <FinProNav />
        <FinProAbout
          name={`${document.name}`}
          description={`${document.description}`}
        />
        <BlogSection blogs={document.c_featuredBlogs} />
      </MainLayout>
    </>
  );
}
