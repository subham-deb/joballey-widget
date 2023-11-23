async function updateWidgetContent(uuid) {
  console.log(uuid);
  const apiUrl = `https://catfact.ninja/fact`;

  const resPromise = fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });

  resPromise.then((resolvedData) => {
    console.log("res=>", resolvedData);

    document.getElementById("widget-container").innerHTML = `
    <article class="rounded-md border border-gray-300 bg-white shadow-sm mx-2 mt-4">
    <div
      class="block rounded-lg p-6   shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
    >
      <h5 class="mb-2 text-xl font-medium leading-tight text-black">
        Product Manager
      </h5>
      <div
        class="text-sm font-medium text-gray-600 flex flex-row font-serif title="Company Name""
        id="job-organisation"
      >
      <span class="text-sm italic text-gray-500" title="Location">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 inline mr-2 mb-1 cursor-pointer"
          
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
          />
        </svg>
  
        <span class="hover:text-gray-700 hover:underline">
          Kreeti Technlogies PVT LTD
        </span>
      </div>
      <div class="flex flex-wrap font-serif">
        <div class="flex mr-4" id="job-location">
          <span class="text-sm italic text-gray-500" title="Location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 inline mr-2 mb-1 cursor-pointer"
              
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </span>
          <span class="text-sm italic text-gray-600"> Kolkata </span>
        </div>
  
        <div class="flex mr-4" data-testid="location-type-icon">
          <span class="text-sm italic text-gray-500" title="Location Type">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 inline mr-2 mb-1 cursor-pointer"
              
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
              />
            </svg>
          </span>
          <span class="text-sm italic text-gray-600"> Work From Home </span>
        </div>
  
        <div class="flex mr-4" data-testid="ctc-icon">
          <span class="text-sm italic text-gray-500" title="CTC">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 inline mr-2 mb-1 cursor-pointer"
              
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
              />
            </svg>
          </span>
          <span class="text-sm italic text-gray-600"> 8.5 LPA </span>
        </div>
      </div>
  
      <form method="post" action="https://api.joballey.in/phx_api/candidate/jobs/${uuid}/apply_now">
      <button
      type="submit"
      class="flex flex-row disabled:pointer-events-none rounded-lg mt-2 bg-blue-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
      >
      <span id="apply-button" class="mr-2 apply-button">Apply Now</span>
      <svg id="loader"  aria-hidden="true" class="w-4 h-4 hidden text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
  </svg>
  <span class="sr-only">Loading...</span>
      
    </button>
  </form>
  <article class="rounded-md border border-gray-300 bg-white shadow-sm mt-4">
  <div class="max-h-[55vh] overflow-y-auto px-2 pb-3 text-left">
  
  <div class="my-3">
    <div data-testid={testId}>
        <h5 class="text-md font-semibold" id="detail-box-title">
          Description
        </h5>
      <div class="text-justify font-serif" id="detail-box-descripton">
      ${resolvedData.fact}
      </div>
    </div>
  </div>

  <div class="my-3">
      <div data-testid={testId}>
          <h5 class="text-md font-semibold" id="detail-box-title">
            Requirements
          </h5>
        <div class="text-justify font-serif" id="detail-box-descripton">
        ${resolvedData.fact}
        </div>
      </div>
    </div>
  </div>
    </div>
    </article>
  </article>
    `;
  });
}
