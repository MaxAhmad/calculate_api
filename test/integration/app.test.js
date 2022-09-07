const supertest = require('supertest');
const server = require('../../app');


describe("Calculate", () => {
    it('POST /calculate: action: sum', async () => {
        const sum = {
            action: "sum",
            num1: 20,
            num2: 10,
        }
        const response = await supertest(server).post("/calculate").send(sum)

         expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 30 }))
    })

    it('POST /calculate: action: multiply', async () => {
        const multiply = {
            action: "multiply",
            num1: 20,
            num2: 10,
        }
        const response = await supertest(server).post("/calculate").send(multiply)
        
         expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 200 }))
    })

    it('POST /calculate: action: subtract', async () => {
        const subtract = {
            action: "subtract",
            num1: 20,
            num2: 10,
        }
        const response = await supertest(server).post("/calculate").send (subtract)
        
         expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 10 }))
    })

    it('POST /calculate: action: divide', async () => {
        const divide = {
            action: "divide",
            num1: 20,
            num2: 10,
        }
        const response = await supertest(server).post("/calculate").send(divide)
        
         expect(response.status).toBe(200)
        expect(response.text).toBe(JSON.stringify({ result: 2 }))
    })
})
