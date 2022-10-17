import { ListedItem, ListWrapper } from './StarshipList.styles';
import useAxios from './useAxios';

const StarshipList = (props) => {
  const [starshipList] = useAxios("https://swapi.dev/api/starships/");

  console.log(starshipList);

  /*  if (isLoading) {
    return <div className="App">Loading...</div>;
  }*/

  return (
    <>
      {starshipList &&
        starshipList.results.map((item) => {
          return (
            <ListWrapper key={item.name}>
              <ListedItem>
                <p>{item.name.toUpperCase()}</p>
                <p>{item.model}</p>
              </ListedItem>
            </ListWrapper>
          );
        })}
    </>
  );
};

export default StarshipList;
