import test from "ava"
import is from "@sindresorhus/is"
import winds from "."

test("main", async (t) => {
    t.true(is.array(await winds()))
})
