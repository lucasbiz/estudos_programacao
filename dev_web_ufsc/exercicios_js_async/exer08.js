let i=0
let max = 10
function p() {
    pp = new Promise(resolve => setTimeout(resolve, 1000))
    pp.then(() => {
        console.log(i++)
        if (i < max) {
            return p()
        }
    })
    return pp
}        
p()