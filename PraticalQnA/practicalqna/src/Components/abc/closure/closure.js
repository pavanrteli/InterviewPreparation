function GrandFather(){
    function Father(){
        const father="Father";
        function son(){
            const son="Son";
            console.log(son);
            console.log(father);
        }
        return son;
    }
    return Father;
}
const result=GrandFather();
const finalResult=result();
finalResult();