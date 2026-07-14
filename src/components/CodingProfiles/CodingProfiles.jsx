import styles from "./CodingProfiles.module.css";

import {
  SiCodechef,
  SiLeetcode,
  SiHackerrank,
} from "react-icons/si";

const profiles = [
  {
    icon: <SiCodechef />,
    name: "CodeChef",
    link: "https://www.codechef.com/users/shubhinarwaria",
  },
  {
    icon: <SiLeetcode />,
    name: "LeetCode",
    link: "https://leetcode.com/u/bg2bULVewq/",
  },
  {
    icon: <SiHackerrank />,
    name: "HackerRank",
    link: "https://www.hackerrank.com/profile/shubhi_narwaria",
  },
];

function CodingProfiles() {
  return (
    <section id="profiles" className={styles.profiles}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Coding Profiles</h2>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.grid}>
        {profiles.map((profile) => (
          <div className={styles.card} key={profile.name}>
            <div className={styles.icon}>
              {profile.icon}
            </div>

            <h3>{profile.name}</h3>

            <p className={styles.subtitle}>
  {profile.subtitle || "\u00A0"}
</p>

            <a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.profileLink}
            >
              Profile ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CodingProfiles;