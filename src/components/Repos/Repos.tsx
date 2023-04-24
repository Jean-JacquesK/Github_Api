import {
  FaEye,
  FaInfo,
  FaLink,
  FaSteamSquare,
  FaUtensils,
} from "react-icons/fa";
import { GithubRepos } from "../../utils/interfaces/GithubAPI";

export function ReposList({ repos }: { repos: GithubRepos[] }) {
  return (
    <div className='card m-1 shadow'>
      <div className='card-body'>
        <h2 className='card-title m-2'>Repositories :</h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

type RepoItemProps = {
  repo: GithubRepos;
};

function RepoItem({ repo }: RepoItemProps) {
  return (
    <div className='card my-2'>
      <div className='card-body'>
        <h3 className='mb-2 card-title'>
          <a
            href={repo.html_url}
            target='_blank'
            className='text-decoration-none text-secondary '
          >
            <FaLink className='mr-1 ' /> {repo.name}
          </a>
        </h3>
        <p className='mb-3'>{repo.description}</p>
        <div>
          <div className='mr-2 badge rounded-pill text-bg-info'>
            <FaEye className='mr-2' /> {repo.watchers_count}
          </div>
          <div className='mr-2 badge rounded-pill text-bg-success'>
            <FaSteamSquare className='mr-2' /> {repo.stargazers_count}
          </div>
          <div className='mr-2 badge rounded-pill text-bg-danger'>
            <FaInfo className='mr-2' /> {repo.open_issues}
          </div>
          <div className='mr-2 badge rounded-pill text-bg-warning'>
            <FaUtensils className='mr-2' /> {repo.forks}
          </div>
        </div>
      </div>
    </div>
  );
}
