import React from 'react'

function Category() {
  return (
    <div className="flex h-20 w-full space-x-2 overflow-auto py-3 px-3">
      <div className="h-10 w-16 pt-2">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 305 305"
          className="mx-5 h-5 w-5"
        >
          <path
            id="XMLID_229_"
            d="M40.738,112.119c-25.785,44.745-9.393,112.648,19.121,153.82C74.092,286.523,88.502,305,108.239,305
  c0.372,0,0.745-0.007,1.127-0.022c9.273-0.37,15.974-3.225,22.453-5.984c7.274-3.1,14.797-6.305,26.597-6.305
  c11.226,0,18.39,3.101,25.318,6.099c6.828,2.954,13.861,6.01,24.253,5.815c22.232-0.414,35.882-20.352,47.925-37.941
  c12.567-18.365,18.871-36.196,20.998-43.01l0.086-0.271c0.405-1.211-0.167-2.533-1.328-3.066c-0.032-0.015-0.15-0.064-0.183-0.078
  c-3.915-1.601-38.257-16.836-38.618-58.36c-0.335-33.736,25.763-51.601,30.997-54.839l0.244-0.152
  c0.567-0.365,0.962-0.944,1.096-1.606c0.134-0.661-0.006-1.349-0.386-1.905c-18.014-26.362-45.624-30.335-56.74-30.813
  c-1.613-0.161-3.278-0.242-4.95-0.242c-13.056,0-25.563,4.931-35.611,8.893c-6.936,2.735-12.927,5.097-17.059,5.097
  c-4.643,0-10.668-2.391-17.645-5.159c-9.33-3.703-19.905-7.899-31.1-7.899c-0.267,0-0.53,0.003-0.789,0.008
  C78.894,73.643,54.298,88.535,40.738,112.119z"
          />
          <path
            id="XMLID_230_"
            d="M212.101,0.002c-15.763,0.642-34.672,10.345-45.974,23.583c-9.605,11.127-18.988,29.679-16.516,48.379
  c0.155,1.17,1.107,2.073,2.284,2.164c1.064,0.083,2.15,0.125,3.232,0.126c15.413,0,32.04-8.527,43.395-22.257
  c11.951-14.498,17.994-33.104,16.166-49.77C214.544,0.921,213.395-0.049,212.101,0.002z"
          />
        </svg>
        <p className="pt-1 text-center text-xs font-bold">Apple</p>
      </div>
      <div className="h-10 w-16 pt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mx-5 h-5 w-5"
        >
          <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
          <path
            fillRule="evenodd"
            d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>
        <p className="pt-1 text-center text-xs font-bold">カメラ</p>
      </div>
      <div className="h-10 w-16 pt-2">
        <svg
          className="mx-5 h-5 w-5"
          viewBox="0 -64 640 640"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M631.2 96.5L436.5 0C416.4 27.8 371.9 47.2 320 47.2S223.6 27.8 203.5 0L8.8 96.5c-7.9 4-11.1 13.6-7.2 21.5l57.2 114.5c4 7.9 13.6 11.1 21.5 7.2l56.6-27.7c10.6-5.2 23 2.5 23 14.4V480c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V226.3c0-11.8 12.4-19.6 23-14.4l56.6 27.7c7.9 4 17.5.8 21.5-7.2L638.3 118c4-7.9.8-17.6-7.1-21.5z" />
        </svg>
        <p className="pt-1 text-center text-xs font-bold">服</p>
      </div>
      <div className="h-10 w-16 pt-2">
        <svg
          version="1.1"
          className="mx-5 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 290.56 290.56"
        >
          <path
            d="M290.335,188.266c-1.446-4.753-2.893-9.506-4.339-14.259c-0.828-2.72-3.689-4.268-6.419-3.475
c-2.274,0.661-0.635,0.255-2.918,0.875l-0.316-1.139c-5.231-18.866-21.602-32.544-41.097-34.348
c-14.479-1.339-33.876-5.251-57.929-14.696c-2.933-1.152-6.294-2.861-9.898-4.941l-8.946,14.063
c-1.43,2.247-3.856,3.476-6.335,3.476c-1.378,0-2.77-0.379-4.019-1.173c-3.495-2.224-4.526-6.858-2.303-10.354l8.949-14.067
c-4.161-2.845-8.364-5.876-12.391-8.877l-18.01,24.613c-1.469,2.008-3.748,3.072-6.059,3.072c-1.537,0-3.088-0.472-4.423-1.448
c-3.343-2.446-4.07-7.139-1.624-10.481l18.215-24.893c-3.408-2.688-6.41-5.113-8.771-7.044c-3.028-2.477-7.447-2.167-10.106,0.702
c-10.388,11.209-38.802,36.244-86.165,37.351c-4.583,0.107-9.086-0.101-13.487-0.447c-1.394-0.11-2.77,0.368-3.797,1.318
c-1.026,0.95-1.608,2.285-1.608,3.683v57.987H4.583c-2.531,0-4.583,2.052-4.583,4.583v16.125c0,2.531,2.052,4.583,4.583,4.583
c0,0,121.524-0.402,122.913-0.402c64.026,0,106.369,1.517,159.319-13.89c1.334-0.388,2.457-1.293,3.118-2.515
C290.595,191.031,290.739,189.595,290.335,188.266z"
          />
        </svg>
        <p className="pt-1 text-center text-xs font-bold">靴</p>
      </div>
      <div className="h-10 w-16 pt-2">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-5 h-5 w-5"
          viewBox="0 0 424.41 424.411"
        >
          <path
            d="M69.511,56.196v328.965c0,21.681,17.566,39.249,39.25,39.249h206.885c21.664,0,39.253-17.568,39.253-39.249V56.196
  c0-4.344-1.487-11.041-3.298-14.98l-7.879-17.051C337.56,10.818,314.974,0,293.301,0H133.758c-21.676,0-44.852,10.818-51.76,24.165
  c-3.476,6.728-6.622,12.82-8.892,17.2C71.127,45.218,69.511,51.86,69.511,56.196z M122.178,391.065
  c-6.061,0-10.966-4.909-10.966-10.965c0-6.055,4.905-10.964,10.966-10.964c6.053,0,10.966,4.909,10.966,10.964
  C133.145,386.156,128.231,391.065,122.178,391.065z M113.206,223.034c0-6.056,4.921-10.96,10.974-10.96
  c6.051,0,10.958,4.905,10.958,10.96c0,6.055-4.915,10.96-10.958,10.96C118.126,233.994,113.206,229.088,113.206,223.034z
   M302.214,391.065c-6.056,0-10.96-4.909-10.96-10.965c0-6.055,4.913-10.964,10.96-10.964c6.051,0,10.956,4.909,10.956,10.964
  C313.17,386.156,308.273,391.065,302.214,391.065z M304.209,233.994c-6.051,0-10.956-4.905-10.956-10.956
  c0-6.051,4.913-10.957,10.956-10.957c6.063,0,10.969,4.905,10.969,10.957C315.178,229.088,310.272,233.994,304.209,233.994z
   M300.206,110.018c10.503,0,19.016,8.51,19.016,19.005c0,10.496-8.513,19.005-19.016,19.005c-10.495,0-19.003-8.51-19.003-19.005
  C281.203,118.528,289.711,110.018,300.206,110.018z M212.189,215.046c48.612,0,88.017,39.409,88.017,88.008
  c0,48.605-39.405,88.011-88.017,88.011c-48.608,0-88.009-39.405-88.009-88.011C124.18,254.456,163.581,215.046,212.189,215.046z
   M128.514,110.018c10.496,0,19.005,8.51,19.005,19.005c0,10.496-8.51,19.005-19.005,19.005c-10.497,0-19.001-8.51-19.001-19.005
  C109.513,118.528,118.017,110.018,128.514,110.018z"
          />
          <path
            d="M212.189,276.06c14.91,0,26.992,12.09,26.992,26.994c0,14.919-12.082,27.002-26.992,27.002
  c-14.912,0-26.996-12.083-26.996-27.002C185.193,288.15,197.277,276.06,212.189,276.06z"
          />
        </svg>
        <p className="pt-1 text-center text-xs font-bold">スピーカ</p>
      </div>
      <div className="h-10 w-16 pt-2">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.498 26.498"
          className="mx-5 h-5 w-5"
        >
          <path
            d="M26.394,22.189l-1.711-6.417V4.162c0-1.778-1.446-3.225-3.225-3.225H5.041c-1.778,0-3.225,1.446-3.225,3.225v11.611
      l-1.711,6.417c-0.229,0.86-0.078,1.722,0.415,2.362c0.493,0.642,1.286,1.01,2.176,1.01h21.107c0.89,0,1.683-0.368,2.176-1.01
      C26.471,23.911,26.623,23.05,26.394,22.189z M5.041,2.695h16.417c0.808,0,1.466,0.657,1.466,1.466v11.318H3.575V4.162
      C3.575,3.354,4.231,2.695,5.041,2.695z M24.584,23.481c-0.16,0.207-0.438,0.322-0.781,0.322H2.694
      c-0.344,0-0.622-0.115-0.781-0.322c-0.159-0.208-0.199-0.506-0.11-0.838l1.741-6.527l0.006-0.05h19.397l0.006,0.05l1.74,6.527
      C24.783,22.976,24.743,23.273,24.584,23.481z"
          />
          <path
            d="M5.041,14.618h16.417c0.321,0,0.586-0.265,0.586-0.586V4.21c0-0.322-0.265-0.586-0.586-0.586H5.041
      c-0.322,0-0.586,0.264-0.586,0.586v9.822C4.455,14.354,4.718,14.618,5.041,14.618z"
          />
          <polygon points="9.315,19.741 8.682,22.65 17.229,22.65 16.595,19.741 		" />
        </svg>
        <p className="pt-1 text-center text-xs font-bold">パソコン</p>
      </div>
    </div>
  )
}

export default Category
