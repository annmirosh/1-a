///1
// hi

onUserEvent((p, e)=>{
    console.info('==', e);
    if (e.event === "rrbuttonClicked") {
        p.play({foo:123});
    }
});

