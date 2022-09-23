import Head from "next/head";

const Reviews = ({reviews}) => {
  console.log(reviews);
  return (
    <>
      <Head>
        <title>Big burgers | Asosiy</title>
        <meta name="title" content="Big burgers" />
      </Head>
      <div>
        <h1>Clients reviews</h1>
        <div className="reviews">
          {!!reviews.length &&
            reviews.map((res) => {
              return (
                <div className="review" key={res.id}>
                  {res.id}. {`${res.body.slice(0, 99)}...`}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();

  return{
    props: {
        reviews: data.slice(0, 20)
    }
  }
}

export default Reviews;
