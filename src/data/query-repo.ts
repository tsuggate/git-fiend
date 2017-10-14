import * as Git from 'nodegit';
import {Commit, ConvenientPatch, Diff, DiffFile, Repository, Revwalk} from 'nodegit';
import * as path from 'path';
import * as moment from 'moment';
import {ModifiedFilesProps} from "../ui/modified-files/modified-files-reducer";


const pathToRepo = path.resolve(__dirname, '..');

export async function printQuery() {
   const repo: Repository = await Git.Repository.open(pathToRepo);

   const commits = await getCommits(repo, 3);
   commits.forEach(logCommit);
}

export async function openRepo(): Promise<Repository> {
   return await Git.Repository.open(pathToRepo);
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

export async function loadModifiedFiles(repo: Repository): Promise<ModifiedFilesProps> {
   const commit = await repo.getHeadCommit();
   const diffFiles = await getChangedFilesForCommit(commit);

   return {
      commitId: commit.id(),
      diffFiles
   };
}

// This is just a quick approx. Has issues.
export async function getChangedFilesForCommit(commit: Commit) {
   const diffs: Diff[] = await commit.getDiff(() => {});

   let diffFiles: DiffFile[] = [];

   for (const d of diffs) {
      const patches: ConvenientPatch[] = await d.patches();

      patches.forEach(p => {
         const diffFile: DiffFile = p.newFile();

         diffFiles.push(diffFile);
      });
   }

   return diffFiles;
}
