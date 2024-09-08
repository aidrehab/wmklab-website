import style from "./page.module.scss";

export default function Home() {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.logo}>
          wmk<span className={style.logoEnd}>lab</span>
        </div>
        <div className={style.manifest}>
          Redefining Care. Empowering Every Life.
        </div>
        <div className={style.statement}>
          Help isn&apos;t a privilege—it&apos;s a right. We&apos;re tearing down the barriers
          of an outdated system to make world-class care accessible for you. No
          more playing by the old rules. Affordable, global, and fearless, we&apos;re
          here to revolutionize healthcare—for you and everyone who needs it.
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}
