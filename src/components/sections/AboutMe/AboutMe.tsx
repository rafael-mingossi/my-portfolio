import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import styles from "./about.module.css";

interface SectionProps {
  id: string;
}

export default function AboutMe({ id }: SectionProps) {
  return (
    <section id={id} className={styles.sectionWrapper}>
      <SectionHeader title="ABOUT ME" subtitle="long story short" />
      <p>
        Originally from Brazil, where I built a solid career in Finance and Tax
        for almost 10 years, I realised my true passion lay elsewhere. So my
        wife and I decided to shake things up – we moved to Australia and have
        called it home since 2016. Here I found my calling, graduating with a
        Bachelor&#39;s Degree in Information Technology with a major in Web and
        Mobile Development, which provided the foundation to officially start my
        career as a developer.
        <br />
        <br />
        Now, I bring a global perspective to my work with over 4 years in the
        JavaScript ecosystem. I&#39;ve built my career transforming designs into
        seamless digital experiences that users love to interact with. My
        experience extends beyond the front end, working with AWS, GraphQL APIs,
        and both Shopify and CMS integrations.
        <br />
        <br />
        In my free time, I&#39;m exploring Java to deepen my understanding of
        OOP paradigms – a journey I&#39;m finding fascinating – and to enhance
        my back-end development skills. I maintain a continuous learning
        approach with TypeScript, CSS, and testing frameworks. I approach each
        project with both technical precision and creative problem-solving,
        believing that the best interfaces are those users don&#39;t even notice
        they&#39;re using.
      </p>
    </section>
  );
}
