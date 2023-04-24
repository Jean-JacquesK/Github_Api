import { useQuery } from "react-query";
import { fetchGitHub } from "../../utils/api/fetchGithub";
import { Spinner } from "../../utils/ui/Spinner";
import { Item } from "../../utils/interfaces/GithubAPI";
import { Link } from "react-router-dom";

export default function UsersResults({ userName }: { userName: string }) {
  const {
    data: users,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["userName", userName],
    queryFn: () => fetchGitHub(userName),
  });

  if (isLoading) return <Spinner />;

  if (error instanceof Error) {
    return <div>{error.toString()}</div>;
  }

  if (isError || !users) return <div>Something went wrong</div>;

  if (!!users) {
    return (
      <>
        <UsersList users={users.items} />
      </>
    );
  }
}
export const UsersList = ({ users }: { users: Item[] }) => {
  return (
    <div className='d-flex justify-centent-center align-items-center flex-wrap m-5'>
      {users?.map((user: Item) => (
        <UserCard key={user.id} login={user.login} url={user.avatar_url} />
      ))}
    </div>
  );
};

export const UserCard = ({ login, url }: { login: string; url: string }) => {
  return (
    <div
      className='card d-flex justify-centent-center align-items-center card-body m-2'
      style={{ width: "20em", height: "17em" }}
    >
      <div className='d-flex flex-column justify-centent-center align-items-between'>
        <div className='text-center'>
          <div className='d-flex justify-centent-center align-items-center'>
            <div
              className='card-img-top'
              style={{ width: "100%", height: "100%" }}
            >
              <img src={url} alt='Profile' style={{ width: "10em" }} />
            </div>
          </div>
        </div>
        <div className='mt-1 d-flex flex-column justify-centent-center align-items-center'>
          <h2
            className='card-title text-center'
            style={{ width: "100%", fontSize: "1.5em" }}
          >
            {login}
          </h2>
          <Link className='btn btn-outline-secondary' to={`/user/${login}`}>
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};
