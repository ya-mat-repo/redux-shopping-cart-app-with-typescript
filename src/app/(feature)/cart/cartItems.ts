export type cartItemProps = {
  id: number;
  title: string;
  price: string;
  img: string;
  amount: number;
};

export const cartItems: cartItemProps[] = [
  {
    id: 1,
    title: 'Next.js入門講座',
    price: '12000',
    img: 'https://picsum.photos/200',
    amount: 1,
  },
  {
    id: 2,
    title: 'MERNスタックで本格的なSNSアプリ構築講座',
    price: '24000',
    img: 'https://picsum.photos/200',
    amount: 1,
  },
  {
    id: 3,
    title: 'GraphQLとApollo入門講座',
    price: '8900',
    img: 'https://picsum.photos/200',
    amount: 1,
  },
  {
    id: 4,
    title: 'Three.jsでモダンウェブサイト構築講座',
    price: '14000',
    img: 'https://picsum.photos/200',
    amount: 1,
  },
];
