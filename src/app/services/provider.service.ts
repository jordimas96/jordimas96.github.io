import { Injectable } from '@angular/core';
import { PeticioService } from './peticio.service';

@Injectable({
    providedIn: 'root'
})
export class ProviderService {

    constructor(public peticio: PeticioService) { }


    // Other projects //
    public getRepositorisGitHubProjects() {

        return new Promise<Array<any>>(resolve => {
            this.peticio.get(
                "https://api.github.com/users/jordimas96/repos",
                (data: Array<any>) => {
                    let repos = data.filter((e: any) => e.topics.includes("portfolio-other-projects"));
                    resolve(repos);
                },
                (error) => {
                    console.error(error);
                    resolve([]);
                }
            );
        });
    }
    
    public getReadme(repoName, idioma) {
        return new Promise<any>(resolve => {
            let nomArxiu = "";
            if (idioma == "en")
                nomArxiu = "README.md";
            else
                nomArxiu = `README.${idioma}.md`;

            this.peticio.getText(
                `https://raw.githubusercontent.com/jordimas96/${repoName}/main/${nomArxiu}`,
                (data: any) => {
                    resolve(data);
                },
                (error) => {
                    console.log(`${repoName}: Readme file not found in language '${idioma}', using english by default.`);
                    
                    resolve(null);
                }
            );
        });

    }
















    // MOCKS //
    public getRepositorisGitHubProjects_MOCK() {

        return new Promise<Array<any>>(resolve => {
            resolve([
                {
                    "id": 738574737,
                    "node_id": "R_kgDOLAXBkQ",
                    "name": "evorait-task_materials_ngrx",
                    "full_name": "jordimas96/evorait-task_materials_ngrx",
                    "private": false,
                    "owner": {
                        "login": "jordimas96",
                        "id": 60790986,
                        "node_id": "MDQ6VXNlcjYwNzkwOTg2",
                        "avatar_url": "https://avatars.githubusercontent.com/u/60790986?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/jordimas96",
                        "html_url": "https://github.com/jordimas96",
                        "followers_url": "https://api.github.com/users/jordimas96/followers",
                        "following_url": "https://api.github.com/users/jordimas96/following{/other_user}",
                        "gists_url": "https://api.github.com/users/jordimas96/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/jordimas96/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/jordimas96/subscriptions",
                        "organizations_url": "https://api.github.com/users/jordimas96/orgs",
                        "repos_url": "https://api.github.com/users/jordimas96/repos",
                        "events_url": "https://api.github.com/users/jordimas96/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/jordimas96/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/jordimas96/evorait-task_materials_ngrx",
                    "description": "A small task I made with Angular and NgRx for an interview for a company. I used it also to implement the new features from Anglar 17.",
                    "fork": false,
                    "url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx",
                    "forks_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/forks",
                    "keys_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/teams",
                    "hooks_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/hooks",
                    "issue_events_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/events",
                    "assignees_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/tags",
                    "blobs_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/languages",
                    "stargazers_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/stargazers",
                    "contributors_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/contributors",
                    "subscribers_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/subscribers",
                    "subscription_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/subscription",
                    "commits_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/merges",
                    "archive_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/downloads",
                    "issues_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/labels{/name}",
                    "releases_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/jordimas96/evorait-task_materials_ngrx/deployments",
                    "created_at": "2024-01-03T14:43:59Z",
                    "updated_at": "2024-02-16T15:16:08Z",
                    "pushed_at": "2024-02-03T21:48:40Z",
                    "git_url": "git://github.com/jordimas96/evorait-task_materials_ngrx.git",
                    "ssh_url": "git@github.com:jordimas96/evorait-task_materials_ngrx.git",
                    "clone_url": "https://github.com/jordimas96/evorait-task_materials_ngrx.git",
                    "svn_url": "https://github.com/jordimas96/evorait-task_materials_ngrx",
                    "homepage": "https://jordimas96.github.io/evorait-task_materials_ngrx/",
                    "size": 557,
                    "stargazers_count": 1,
                    "watchers_count": 1,
                    "language": "TypeScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": true,
                    "has_discussions": false,
                    "forks_count": 0,
                    "mirror_url": null,
                    "archived": false,
                    "disabled": false,
                    "open_issues_count": 0,
                    "license": null,
                    "allow_forking": true,
                    "is_template": false,
                    "web_commit_signoff_required": false,
                    "topics": [
                        "portfolio-other-projects"
                    ],
                    "visibility": "public",
                    "forks": 0,
                    "open_issues": 0,
                    "watchers": 1,
                    "default_branch": "main"
                },
                {
                    "id": 751956384,
                    "node_id": "R_kgDOLNHxoA",
                    "name": "rounded-corners-directive",
                    "full_name": "jordimas96/rounded-corners-directive",
                    "private": false,
                    "owner": {
                        "login": "jordimas96",
                        "id": 60790986,
                        "node_id": "MDQ6VXNlcjYwNzkwOTg2",
                        "avatar_url": "https://avatars.githubusercontent.com/u/60790986?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/jordimas96",
                        "html_url": "https://github.com/jordimas96",
                        "followers_url": "https://api.github.com/users/jordimas96/followers",
                        "following_url": "https://api.github.com/users/jordimas96/following{/other_user}",
                        "gists_url": "https://api.github.com/users/jordimas96/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/jordimas96/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/jordimas96/subscriptions",
                        "organizations_url": "https://api.github.com/users/jordimas96/orgs",
                        "repos_url": "https://api.github.com/users/jordimas96/repos",
                        "events_url": "https://api.github.com/users/jordimas96/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/jordimas96/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "html_url": "https://github.com/jordimas96/rounded-corners-directive",
                    "description": "This is a small web to develop and test a new directive that will automatically adapt children's border-radius to match with the parent",
                    "fork": false,
                    "url": "https://api.github.com/repos/jordimas96/rounded-corners-directive",
                    "forks_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/forks",
                    "keys_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/keys{/key_id}",
                    "collaborators_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/collaborators{/collaborator}",
                    "teams_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/teams",
                    "hooks_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/hooks",
                    "issue_events_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/issues/events{/number}",
                    "events_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/events",
                    "assignees_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/assignees{/user}",
                    "branches_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/branches{/branch}",
                    "tags_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/tags",
                    "blobs_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/git/blobs{/sha}",
                    "git_tags_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/git/tags{/sha}",
                    "git_refs_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/git/refs{/sha}",
                    "trees_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/git/trees{/sha}",
                    "statuses_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/statuses/{sha}",
                    "languages_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/languages",
                    "stargazers_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/stargazers",
                    "contributors_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/contributors",
                    "subscribers_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/subscribers",
                    "subscription_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/subscription",
                    "commits_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/commits{/sha}",
                    "git_commits_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/git/commits{/sha}",
                    "comments_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/comments{/number}",
                    "issue_comment_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/issues/comments{/number}",
                    "contents_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/contents/{+path}",
                    "compare_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/compare/{base}...{head}",
                    "merges_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/merges",
                    "archive_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/{archive_format}{/ref}",
                    "downloads_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/downloads",
                    "issues_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/issues{/number}",
                    "pulls_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/pulls{/number}",
                    "milestones_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/milestones{/number}",
                    "notifications_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/notifications{?since,all,participating}",
                    "labels_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/labels{/name}",
                    "releases_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/releases{/id}",
                    "deployments_url": "https://api.github.com/repos/jordimas96/rounded-corners-directive/deployments",
                    "created_at": "2024-02-02T17:39:41Z",
                    "updated_at": "2024-02-16T15:15:32Z",
                    "pushed_at": "2024-02-13T19:27:48Z",
                    "git_url": "git://github.com/jordimas96/rounded-corners-directive.git",
                    "ssh_url": "git@github.com:jordimas96/rounded-corners-directive.git",
                    "clone_url": "https://github.com/jordimas96/rounded-corners-directive.git",
                    "svn_url": "https://github.com/jordimas96/rounded-corners-directive",
                    "homepage": "https://jordimas96.github.io/rounded-corners-directive/",
                    "size": 1831,
                    "stargazers_count": 1,
                    "watchers_count": 1,
                    "language": "TypeScript",
                    "has_issues": true,
                    "has_projects": true,
                    "has_downloads": true,
                    "has_wiki": true,
                    "has_pages": true,
                    "has_discussions": false,
                    "forks_count": 0,
                    "mirror_url": null,
                    "archived": false,
                    "disabled": false,
                    "open_issues_count": 0,
                    "license": null,
                    "allow_forking": true,
                    "is_template": false,
                    "web_commit_signoff_required": false,
                    "topics": [
                        "portfolio-other-projects"
                    ],
                    "visibility": "public",
                    "forks": 0,
                    "open_issues": 0,
                    "watchers": 1,
                    "default_branch": "main"
                }
            ]);
        });
        
    }

}
