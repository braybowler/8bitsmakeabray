import {useTheme} from "../../providers/ThemeContext.tsx";
import {useEffect, useState} from "react";
import axios from 'axios';

type Repo = {
    id: number;
    name: string;
    html_url: string;
    homepage: string | null;
    description: string | null;
    topics: Array<string>;
}

const ProjectsList: React.FC = () => {
    // @ts-ignore
    const { isDarkMode } = useTheme();

    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string|null>(null);

    const fetchRepos = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get(
                `https://api.github.com/users/braybowler/repos`,
            );

            setRepos(response.data);
        } catch (err) {
            setError('Failed to fetch repositories. Please try again later.');
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRepos()
    }, []);

    const filteredRepos = repos.filter(repo => repo.name != 'braybowler');

    if (loading) return <p>Fetching repos...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div
            className="max-h-[375px] p-2 sm:p-4 border-2 border-purple-400 dark:border-green-400 rounded-xl shadow-lg w-full bg-slate-50 dark:bg-black"
        >
            <h2
                className="flex justify-center font-press-start text-purple-400 dark:text-green-400 text-xs sm:text-lg"
            >
                My Projects
            </h2>
            <div className="flex items-center w-full mt-2 mb-2">
                <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent dark:via-orange-400 via-cyan-400 to-transparent"/>
            </div>
            <div className="overflow-y-auto max-h-[300px]">
                <ul className="flex flex-col font-press-start text-purple-400 dark:text-green-400 text-xs sm:text-lg">
                    {filteredRepos.map((repo) => (
                        <li key={repo.id}>
                            <div className="m-2">
                                {
                                    repo.homepage &&
                                    <a
                                        className="text-purple-400 dark:text-green-400 hover:text-cyan-400 dark:hover:text-orange-400 font-press-start text-xs sm:text-lg"
                                        href={repo.homepage}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {repo.homepage}
                                    </a>
                                }
                                {
                                    repo.description &&
                                    <p>{repo.description}</p>
                                }
                                {
                                    repo.topics &&
                                    <>
                                        <p>Developing {repo.name} allowed me to explore: </p>
                                        <ul>
                                            {repo.topics.map((topic) => (
                                                <li>
                                                    <span>{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                }
                                <p>
                                    Check out the code for:
                                    <a
                                        className="text-purple-400 dark:text-green-400 hover:text-cyan-400 dark:hover:text-orange-400 font-press-start text-xs sm:text-lg ml-3 mr-3"
                                          href={repo.html_url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                    >
                                        {repo.name}
                                    </a>
                                    on Github.
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default ProjectsList;