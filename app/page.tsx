

import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Features from "@/components/features/Features";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <main className='px-4'>
      <Features />
      <CategoryList />
      <div className='flex gap-10'>
        <CardList />
        <Menu />
      </div>
    </main>
  );
}
