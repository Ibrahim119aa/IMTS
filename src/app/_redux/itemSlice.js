import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { apiUrl } from '../_utils/api';

export const getBanner = createAsyncThunk('items/fetchItems', async () => {
    const response = await axios.get(`${apiUrl}get-Banner`);
    return response.data;
});
export const getContactUs = createAsyncThunk('items/getContactUs', async () => {
    const response = await axios.get(`${apiUrl}get-Contact-Us-Latest`);
    return response.data;
});


export const getUniversityListeningStep = createAsyncThunk('items/getUniversityListeningPage', async () => {
    const response = await axios.get(`${apiUrl}get-University-Listening-Latest-Page`);
    console.log(response.data);

    return response.data;
});

export const getMediaList = createAsyncThunk('items/getMedia', async () => {
    const response = await axios.get(`${apiUrl}get-Latest-Media`);
    return response.data;
});
export const getExpertPage = createAsyncThunk('items/getExperts', async () => {
    const response = await axios.get(`${apiUrl}get-Latest-Expert-Page`);
    console.log(response.data);

    return response.data;
});


export const getAboutPage = createAsyncThunk('items/getAbout', async () => {
    const response = await axios.get(`${apiUrl}get-Latest-About-Page`);
    console.log(response.data);

    return response.data;
});



export const extractHtmlContentBetweenHeadings = createAsyncThunk(
    'items/extractHtmlContent',
    async (htmlContent, { dispatch }) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
        const newArray = [];

        headings.forEach((heading) => {
            let content = '';

            for (let node = heading.nextSibling; node && !['H1', 'H2', 'H3', 'H4', 'H5'].includes(node.tagName); node = node.nextSibling) {
                content += node.outerHTML || node.textContent;
            }

            content = heading.outerHTML + content;
            newArray.push(content);
        });


        dispatch(setStringArray(newArray));

        return newArray;
    }
);
export const getCourse = createAsyncThunk('items/getCourse', async () => {
    const response = await axios.get(`${apiUrl}get-Course-Page`);
    return response.data;
});


export const getBlogList = createAsyncThunk('items/get-Blog-List', async () => {
    const a = await axios.get(`${apiUrl}get-Blog`);
    return a.data;

})

export const getUniversityFaq = createAsyncThunk('items/get-University-Faq', async (uniId) => {
    let a = await axios.post(`${apiUrl}get-University-Faq-By-University-Id`, { Id: uniId });

    return a.data;
});

export const getFooter = createAsyncThunk('items/getFooter', async () => {
    const response = await axios.get(`${apiUrl}get-Footer`);
    return response.data;
});

export const getSingleBlog = createAsyncThunk('items/get-Single-Blog', async (Id) => {
    let a = await axios.get(`${apiUrl}Particular-Blog1?Id=${Id}`);
    return a.data;


});

export const getStateList = createAsyncThunk('items/get-State', async () => {
    let a = await axios.get(`${apiUrl}get-State`);
    return a.data;

}
);
export const getUniversityPageList = createAsyncThunk('items/get-University-Page-List', async (Id, { dispatch }) => {
    let a = await axios.post(`${apiUrl}get-Single-University`, { Id: Id });


    // await dispatch(getUniversityAuthor(a.data[0].id));

    // await dispatch(getUniversityReview(a.data[0].id));
    // await dispatch(getUniversityFaq(a.data[0].id));
    // await dispatch(getUniversityCourse(a.data[0].id));



    return a.data;

}
);

export const getUniversityReview = createAsyncThunk('items/get-University-Review-List', async (Id) => {
    let a = await axios.post(`${apiUrl}get-Review-By-University-Id`, { Id: Id });

    return a.data;

}
);

export const getUniversityCourse = createAsyncThunk('items/get-University-Course', async (Id) => {

    let a = await axios.post(`${apiUrl}get-Course-By-University-Id`, { Id: Id });

    return a.data;

}
);


export const getUniversityAuthor = createAsyncThunk('items/get-University-Author', async (Id) => {
    let a = await axios.post(`${apiUrl}get-Author`, { Id: Id });

    return a.data;

}
);
export const getLatestHeader = createAsyncThunk('items/get-Latest-Header', async (Id) => {
    let a = await axios.get(`${apiUrl}get-Latest-Header`);

    console.log("I am Ibrahim");

    console.log(a.data);

    return a.data;

}
);

export const getCityList = createAsyncThunk('items/get-City-By-State', async (Id) => {
    let a = await axios.post(`${apiUrl}get-City-By-State`,
        {
            Id: Id
        }
    );
    console.log(a.data);
    return a.data;

}
);
export const getOneStep = createAsyncThunk('items/getOneStep', async () => {
    let response = await axios.get(`${apiUrl}get-One-Step-Solution-Client`);
    console.log(response.data);
    console.log("I am one step");
    return response.data;
})
export const getOneStepImage = createAsyncThunk('items/getOneStepImage', async () => {
    let response = await axios.get(`${apiUrl}get-One-Step-Solution`);
    return response.data.Image;
})
export const getUniversityByTotalCourse = createAsyncThunk('items/getUniversityByTotalCourse', async () => {
    let response = await axios.get(`${apiUrl}get-University-By-Total-Course`);
    return response.data;
})
export const getCourseByTotal = createAsyncThunk('items/getTotalCourse', async () => {
    let a = await axios.get(`${apiUrl}get-Course-By-Type`);
    console.log(a.data);

    return a.data;

})
export const getStaffList = createAsyncThunk('items/getStaffList', async (name) => {
    let a = await axios.get(`${apiUrl}get-Staff`);
    return a.data;

})
export const getNewList = createAsyncThunk('items/getNewList', async (name) => {
    let a = await axios.get(`${apiUrl}get-Media`);
    return a.data;

})

export const getAlumniList = createAsyncThunk('items/getAlumiList', async (name) => {
    let a = await axios.get(`${apiUrl}get-Alumni`);
    return a.data;

})

export const getHomePage = createAsyncThunk('items/get-Home-Page', async (name) => {
    let a = await axios.get(`${apiUrl}get-Home-Page`);
    console.log(a.data);

    return a.data;

})
export const getHomePage1 = createAsyncThunk('items/get-Home-Page1', async (name) => {
    let a = await axios.get(`${apiUrl}get-Home-Page1`);


    return a.data;

})

export const getSecondaryData = createAsyncThunk('items/get-Secondary-Data', async (name) => {
    let a = await axios.get(`${apiUrl}get-Secondary-Data`);
    console.log(a.data);

    return a.data;

})


export const getJobData = createAsyncThunk('items/get-Job-Data', async (name) => {
    let a = await axios.get(`${apiUrl}get-Job`);
    console.log("I am reduxc");
    console.log(a.data);



    return a.data;

})


export const getSpecializationList = createAsyncThunk('items/get-Specialization', async (name) => {
    let a = await axios.get(`${apiUrl}get-Specialization-By-Course`);
    console.log("I am reduxc");
    console.log(a.data);



    return a.data;

})
export const getEsblishedList = createAsyncThunk('items/get-Establish', async () => {
    let a = await axios.get(`${apiUrl}get-Establish`);
    return a.data;
}
);

export const getUniversityListBySpecialization = createAsyncThunk('items/get-University-Specialization', async () => {
    let a = await axios.get(`${apiUrl}get-University-By-Course-Specialization`);

    return a.data;






})

export const getFaq = createAsyncThunk('items/get-Faq', async () => {
    let a = await axios.get(`${apiUrl}get-Faq`);
    return a.data;
})

export const getUniversityListeningBenefit = createAsyncThunk('items/get-Latest-University-Listening-Benefit', async () => {
    let a = await axios.get(`${apiUrl}get-Latest-University-Listening-Benefit`);
    return a.data;
})


const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        joblist: [],
        universitylistbenefit: [],
        secondarylist: [],
        authorid: '',
        faqlist: [],
        universityliststep: [],
        universityspecialization: [],
        specializationlist: [],
        banner: [],
        homepage: [],
        universityfaq: [],
        onestep: [],
        universitycourse: [],
        totalbloglist: [],
        courselist: [],
        statelist: [],
        singleblog: [],
        onestepimage: [],
        citylist: [],
        headerlist: [],
        universitybytotalcourse: [],
        totalcourselist: [],
        universitypagelist: [],
        newslist: [],
        contactlist: [],
        alumnilist: [],
        medialist: [],
        stafflist: [],
        stringArray: [],
        footerlist: [],
        universityauthor: [],
        universityreview: [],
        expertlist: [],
        aboutlist: [],
        establishlist: [],
        specializationid: '',
        specializationame: '',
        status: 'idle',

        error: null
    },
    reducers: {
        setSpecializationId: (state, action) => {
            console.log("Memon");
            state.specializationid = action.payload;
            console.log(action.payload);


        },
        setAuthorId: (state, action) => {
            state.authorid = action.payload;


        },
        setSpecializationName: (state, action) => {
            console.log("Memon");
            state.specializationame = action.payload;



        },
        setUniId: (state, action) => {
            state.uniId = action.payload;
        },
        setProspectus: (state, action) => {
            state.prospectus = action.payload;
        },
        setAboutContent: (state, action) => {
            state.aboutContent = action.payload;
        },
        setIsImage: (state, action) => {
            state.isImage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder

            .addCase(getEsblishedList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getEsblishedList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.establishlist = action.payload;
            })
            .addCase(getEsblishedList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(getUniversityListeningBenefit.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUniversityListeningBenefit.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.universitylistbenefit = action.payload;
            })
            .addCase(getUniversityListeningBenefit.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(getStateList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getStateList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.statelist = action.payload;
            })
            .addCase(getStateList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })


            .addCase(getUniversityListeningStep.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUniversityListeningStep.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.universityliststep = action.payload;
            })
            .addCase(getUniversityListeningStep.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })


            .addCase(getMediaList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getMediaList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.medialist = action.payload;
            })
            .addCase(getMediaList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(getContactUs.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getContactUs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.contactlist = action.payload;
            })
            .addCase(getContactUs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(getAboutPage.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAboutPage.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.aboutlist = action.payload;
            })
            .addCase(getAboutPage.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(getFaq.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getFaq.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.faqlist = action.payload;
            })
            .addCase(getFaq.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })


            .addCase(getExpertPage.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getExpertPage.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.expertlist = action.payload;
            })
            .addCase(getExpertPage.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(getUniversityListBySpecialization.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUniversityListBySpecialization.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.universityspecialization = action.payload;
            })
            .addCase(getUniversityListBySpecialization.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })


            .addCase(getSpecializationList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSpecializationList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.specializationlist = action.payload;
            })
            .addCase(getSpecializationList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })


            .addCase(getJobData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getJobData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.joblist = action.payload;
            })
            .addCase(getJobData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(getSecondaryData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSecondaryData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.secondarylist = action.payload;
            })
            .addCase(getSecondaryData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(getHomePage.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getHomePage.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.homepage = action.payload;
            })
            .addCase(getHomePage.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(getHomePage1.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getHomePage1.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.homepage = action.payload;
            })
            .addCase(getHomePage1.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(getSingleBlog.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSingleBlog.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.singleblog = action.payload;
            })
            .addCase(getSingleBlog.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })


            .addCase(getBlogList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getBlogList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.totalbloglist = action.payload;
            })
            .addCase(getBlogList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })


            .addCase(getUniversityCourse.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUniversityCourse.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.universitycourse = action.payload;
            })
            .addCase(getUniversityCourse.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(getUniversityFaq.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUniversityFaq.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.universityfaq = action.payload;
            })
            .addCase(getUniversityFaq.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })


            .addCase(getUniversityAuthor.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUniversityAuthor.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.universityauthor = action.payload;
            })
            .addCase(getUniversityAuthor.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(getLatestHeader.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getLatestHeader.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log("THis is Payload");
                console.log(action.payload);

                state.headerlist = action.payload;
            })
            .addCase(getLatestHeader.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(getUniversityReview.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUniversityReview.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.universityreview = action.payload;
            })
            .addCase(getUniversityReview.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(getUniversityPageList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUniversityPageList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.universitypagelist = action.payload;




                const data = action.payload.university[0];
                state.uniId = data.id;
                state.prospectus = data.prospectus;
                state.aboutContent = data.about;

                state.isImage = data.imageurl.length > 0;

            })
            .addCase(getUniversityPageList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(getBanner.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getBanner.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.banner = action.payload;
            })
            .addCase(getBanner.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(getCourse.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getCourse.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.courselist = action.payload;
            })
            .addCase(getCourse.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(getFooter.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getFooter.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.footerlist = action.payload;
            })
            .addCase(getFooter.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            .addCase(getAlumniList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAlumniList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.alumnilist = action.payload;
            })
            .addCase(getAlumniList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(getNewList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getNewList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.newslist = action.payload;
            })
            .addCase(getNewList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(getStaffList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getStaffList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.stafflist = action.payload;
            })
            .addCase(getStaffList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(getCourseByTotal.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getCourseByTotal.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.totalcourselist = action.payload;
            })
            .addCase(getCourseByTotal.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(getUniversityByTotalCourse.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUniversityByTotalCourse.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.universitybytotalcourse = action.payload;
            })
            .addCase(getUniversityByTotalCourse.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(getOneStep.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getOneStep.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.onestep = action.payload;
            })
            .addCase(getOneStep.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(getOneStepImage.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getOneStepImage.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.onestepimage = action.payload;
            })
            .addCase(getOneStepImage.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(getCityList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getCityList.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.citylist = action.payload;
            })
            .addCase(getCityList.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })


    }
});



export const { setStringArray } = itemsSlice.actions;
export const { setSpecializationId } = itemsSlice.actions;
export const { setSpecializationName } = itemsSlice.actions;
export const { setAuthorId } = itemsSlice.actions;
export default itemsSlice.reducer;

export const getFaqDetail = state => state.items.faqlist;
export const getAboutPageDetail = state => state.items.aboutlist;
export const getUniversityListeningStepPageDetail = state => state.items.universityliststep;
export const getContactPageDetail = state => state.items.contactlist;
export const getSingleBlogDetail = state => state.items.singleblog;
export const getHomePageDetail = state => state.items.homepage;
export const getSecondaryDetail = state => state.items.secondarylist;
export const getJobPageDetail = state => state.items.joblist;
export const getSpecializationlistDetail = state => state.items.specializationlist;
export const getUniversitySpecializationlistDetail = state => state.items.universityspecialization;
export const getExpertPageDetail = state => state.items.expertlist;
export const getMediaPageDetail = state => state.items.medialist;
export const getUniversityListeningBenefitDetail = state => state.items.universitylistbenefit;
export const getEstablishListDetail = state => state.items.establishlist;
export const getLatestHeaderDetail = state => state.items?.headerlist || "Memin nnhi h";
export const getUniversityCourseDetail = state => state.items.universitycourse;
export const getTotalBlogListDetail = state => state.items.totalbloglist;
export const getUniversityAuthorDetail = state => state.items.universityauthor;
export const getBannerDetail = state => state.items.banner;
export const getUniversityFaqDetail = state => state.items.universityfaq;
export const getUniversityReviewDetail = state => state.items.universityreview;
export const getUniversityPageListDetail = state => state.items.universitypagelist;
export const getCityListCache = state => state.items.citylist;
export const getAllCourseDetail = state => state.items.courselist;
export const getFooterDetail = state => state.items.footerlist;
export const getStateListCache = state => state.items.statelist;
export const getAlumniDetail = state => state.items.alumnilist;
export const getNewDetail = state => state.items.newslist;
export const getStaffDetail = state => state.items.stafflist;

export const getCourseListDetail = state => state.items.totalcourselist;
export const getCoursePageDetail = state => state.items.courselist;
export const getUniversityListDetail = state => state.items.universitybytotalcourse;
export const getOneStepListDetail = state => state.items.onestep;
export const getOneStepImageListDetail = state => state.items.onestepimage;


