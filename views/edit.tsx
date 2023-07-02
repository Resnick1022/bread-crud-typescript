import React from 'react';
import Default from './layouts/default';

interface Bread {
  id: string;
  name: string;
  image: string;
  hasGluten: boolean;
}

interface Baker {
  id: string;
  name: string;
}

interface EditProps {
  bread: Bread;
  bakers: Baker[];
}

function Edit({ bread, bakers }: EditProps): JSX.Element {
  return (
    <Default>
      <h2>Edit a bread</h2>
      <form action={`/breads/${bread.id}?_method=PUT`} method="POST">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          defaultValue={bread.name}
        />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          id="image"
          defaultValue={bread.image}
        />
        <label htmlFor="baker">Baker</label>
        <select name="baker" id="baker" defaultValue={bread.name}>
          {bakers.map((baker) => {
            return (
              <option value={baker.id} key={baker.id}>
                {baker.name}
              </option>
            );
          })}
        </select>
        <label htmlFor="hasGluten">Has Gluten?</label>
        <input
          type="checkbox"
          name="hasGluten"
          id="hasGluten"
          defaultChecked={bread.hasGluten}
        />
        <br />
        <input type="submit" />
      </form>
    </Default>
  );
}

export default Edit;
