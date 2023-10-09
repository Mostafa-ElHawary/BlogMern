import CardList from "./components/cardList/CardList";
import CategoryList from "./components/categoryList/CategoryList";
import Features from "./components/features/Features";
import Menu from "./components/menu/Menu";
import styles from "./homepage.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Features />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
