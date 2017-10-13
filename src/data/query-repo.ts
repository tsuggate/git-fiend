import * as Git from 'nodegit';
import {Repository} from 'nodegit';
import * as path from 'path';


const pathToRepo = path.resolve(__dirname, '..');

export async function printQuery() {
   const repo: Repository = await Git.Repository.open(pathToRepo);
   const commit = await repo.getMasterCommit();

   console.log(commit.message());
   console.log('hi');
}
