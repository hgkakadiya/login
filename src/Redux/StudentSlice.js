// import { createSlice } from '@reduxjs/toolkit'

// export const StudentSlice = createSlice({
//     name: 'Student',
//     initialState: [],
// reducers: {
      
//     Studentdata: (state, action) => {
//       state.push(action.payload)
//          //  state.deta = action.payload;
//           // state.SurName = action.payload;
//            // state.Age = action.payload;
//  console.log(action.payload, )
//         },
//     },
// })
// export   const { Studentdata } = StudentSlice.actions;
// export default StudentSlice.reducer;







import { createSlice } from '@reduxjs/toolkit'


export const StudentSlice = createSlice({
    name: 'Student',
    initialState: {
        studentList: [],
        selectedStudent: {},
        expenses: []
    },
    reducers: {

        Studentdata: (state, action) => {
            const item = { ...action.payload };
            if(item.cardId && item.cardId !== '') {
                state.studentList = state.studentList.map(student => {
                    // 👇️ if id equals 2, update country property
                    if (student.cardId === item.cardId) {
                      return item;
                    }
                    // 👇️ otherwise return the object as is
                    return student;
                  });
            } else {
                item.cardId = new Date().getTime();
                state.studentList.push(item);
                //console.log(action.payload, )
            }
        },

        edit(state, action) {
            const selectedValue = state.studentList.filter((item) => item.cardId === action.payload);
          //  console.log('selectedValue: ', selectedValue);
            state.selectedStudent = selectedValue[0];
           // console.log('selectedStudent: ', state.selectedStudent);
        },

        remove(state, action) {
            state.studentList = state.studentList.filter((item) => item.cardId !== action.payload);
        }
    },
})






export const { Studentdata, remove, edit } = StudentSlice.actions;
export default StudentSlice.reducer;