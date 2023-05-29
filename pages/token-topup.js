import AppLayout from "../components/AppLayout/AppLayout";

const Tokentopup = () => {
  return <div>token-topup</div>;
};

Tokentopup.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};
export default Tokentopup;
