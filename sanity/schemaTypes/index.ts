import { type SchemaTypeDefinition } from 'sanity'
import experience from './experience'
import skills from './skills'
import projects from './projects'
import achivements from './achivements'
import education from './education'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [experience,skills,projects,achivements,education],
}
