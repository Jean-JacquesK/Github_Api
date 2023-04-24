import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import {
  fetchDetailsGithub,
  fetchReposGithub,
} from "../../utils/api/fetchGithub";
import { Spinner } from "../../utils/ui/Spinner";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { ReposList } from "../../components/Repos/Repos";

export const UserDetails = () => {
  const { login } = useParams();

  const {
    data: user,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["login", login],
    queryFn: () => fetchDetailsGithub(login),
  });

  const { data: repos } = useQuery({
    queryKey: ["repos", login],
    queryFn: () => fetchReposGithub(login),
  });

  if (!repos) return <Spinner />;

  if (isLoading) return <Spinner />;

  if (error instanceof Error) {
    return <div>{error.toString()}</div>;
  }

  if (isError) return <div>Something went wrong</div>;

  const websiteUrl = user?.blog?.startsWith("http")
    ? user.blog
    : "https://" + user?.blog;

  return (
    <div style={{ width: "90vw", margin: "auto" }}>
      <div className='mb-4'>
        <Link to='/' className='btn btn-secondary mx-1 my-3'>
          Back To Search
        </Link>
      </div>

      <div className='mx-auto'>
        <div className='m-0 d-flex justify-content-center flex-wrap'>
          <div className='card m-2' style={{ height: "10%", width: "25em" }}>
            <div className='card-img' style={{ width: "100%", height: "100%" }}>
              <div className='m-0'>
                <img
                  src={user?.avatar_url}
                  alt={user?.name}
                  className='rounded'
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className='card-img-overlay d-flex flex-column justify-content-end bg-secondary text-white bg-opacity-50'>
                <h2 className='card-title'>{user?.name}</h2>
                <p className='card-subtitle'>{user?.login}</p>
              </div>
            </div>
          </div>

          <div className='d-flex flex-column justify-content-center align-items-between flex-grow-1 mx-3'>
            <div className='w-100'>
              <h1 className='d-flex align-items-start'>
                {user?.name}
                <div
                  className='badge rounded-pill text-bg-success mx-2'
                  style={{ fontSize: ".3em" }}
                >
                  {user?.type}
                </div>
                {user?.hireable && (
                  <div
                    className='badge rounded-pill text-bg-info'
                    style={{ fontSize: ".3em" }}
                  >
                    Hireable
                  </div>
                )}
              </h1>
              <p>{user?.bio}</p>
              <div>
                <a
                  href={user?.html_url}
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-outline-secondary rounded-pill'
                >
                  Visit Github Profile
                </a>
              </div>
            </div>

            <div className='d-flex flex-wrap mt-3 '>
              {location && (
                <div className='card p-2 w-50 m-0'>
                  <div className='text-center'>Location</div>
                  <div className='text-center'>{user?.location}</div>
                </div>
              )}
              {user?.blog && (
                <div className='card p-2 w-50 m-0'>
                  <div className='text-center'>Website</div>
                  <div className='text-center'>
                    <a href={websiteUrl} target='_blank' rel='noreferrer'>
                      {websiteUrl}
                    </a>
                  </div>
                </div>
              )}
              {user?.twitter_username && (
                <div className='card p-2 w-50 m-0'>
                  <div className='text-center'>Twitter</div>
                  <div className='text-center'>
                    <a
                      href={`https://twitter.com/${user.twitter_username}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {user.twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className=' m-1 py-2 bg-secondary-subtle rounded'>
          <div className='d-flex justify-content-around flex-wrap '>
            <div className='d-flex align-items-center'>
              <div className='text-secondary'>
                <FaUsers className='fs-2' />
              </div>
              <div className='mx-3'>
                <div>Followers</div>
                <div>{user?.followers}</div>
              </div>
            </div>

            <div className='d-flex align-items-center'>
              <div className='text-secondary'>
                <FaUserFriends className='fs-2' />
              </div>
              <div className='mx-3'>
                <div>Following</div>
                <div>{user?.following}</div>
              </div>
            </div>

            <div className='d-flex align-items-center'>
              <div className='text-secondary'>
                <FaCodepen className='fs-2' />
              </div>
              <div className='mx-3'>
                <div>Public Repos</div>
                <div>{user?.public_repos}</div>
              </div>
            </div>

            <div className='d-flex align-items-center'>
              <div className='text-secondary'>
                <FaStore className='fs-2' />
              </div>
              <div className='mx-3'>
                <div>Public Gists</div>
                <div>{user?.public_gists}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReposList repos={repos} />
    </div>
  );
};
