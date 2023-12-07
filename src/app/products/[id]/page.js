const DynamicPage = ({ params, searchParams }) => {
  console.log(searchParams);
  return (
    <div>
      <h2>This is Dynamic Page: {params.id} </h2>
      <h3>Search by: {searchParams.category}</h3>
    </div>
  );
};

export default DynamicPage;
