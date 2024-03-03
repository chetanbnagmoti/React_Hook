import React, { useState } from "react";

function HookCounter_object() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <main>
      <div>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h1>firstName : - {name.firstName}</h1>
        <h1>lastName : - {name.lastName}</h1>
        <h1>{JSON.stringify(name)}</h1>
      </div>
    </main>
  );
}

export default HookCounter_object;
