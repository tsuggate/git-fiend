import * as Git from 'nodegit';
import {Commit, Repository, Revwalk} from 'nodegit';
import * as path from 'path';
import * as moment from 'moment';


const pathToRepo = path.resolve(__dirname, '..');

export async function printQuery() {
   const repo: Repository = await Git.Repository.open(pathToRepo);

   const commits = await getCommits(repo, 3);
   commits.forEach(logCommit);
}

export async function getCommits(repo: Repository, num: number): Promise<Commit[]> {
   const commit = await repo.getHeadCommit();
   const walker: Revwalk = repo.createRevWalk(commit.id());

   walker.sorting(Git.Revwalk.SORT.TIME);
   walker.push(commit.id());
   return await walker.getCommits(num);
}

function logCommit(commit: Commit): void {
   const author = commit.author() as any;
   const date = moment(new Date(commit.date())).fromNow();

   console.log(`Commit: ${commit.sha()}`);
   console.log(`Author:`, `${author.name()} <${author.email()}>`);
   console.log('Time:  ', date);
   console.log(`\n   ${commit.message()}`);
}

export async function loadCommits(num: number): Promise<Commit[]> {
   const repo: Repository = await Git.Repository.open(pathToRepo);

   return await getCommits(repo, num);
}