const YouTube = ({ height = 20, width = 20 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <mask
        id="mask0_67_2775"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <rect width="20" height="20" fill="url(#pattern0_67_2775)" />
      </mask>
      <g mask="url(#mask0_67_2775)">
        <rect width="20" height="20" fill="#E5E5E5" />
      </g>
      <defs>
        <pattern
          id="pattern0_67_2775"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_67_2775" transform="scale(0.0333333)" />
        </pattern>
        <image
          id="image0_67_2775"
          width="30"
          height="30"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABCElEQVRIie3WQUrDUBSF4a/OBNFuwLZOBJfRjbge12FFxInuwC3oyKkWQdJRKQ4cWQd5kVqSmpcmUUsPHAiPd/PfXC7hsNWmq1NwvoMBToL7wT3so4u9cPcNU8wwxnPwY/ATPn5qpI/z8JJ5TZ7hInxIro4wqRG47EkR/KpBaObLPHDSAjjJYIvLNc/rpgF1SLc3Vrc1N1J6XDDEfUTNcn1lMOm0TsXvxtrgTF2c4b1tcKZjXJetr7Jcq7RbpejfjPpXlmuIh0jg2uCbisBv4D/xy0wKLtap1+xhEXzXAjiX0XQQSKxIIQOM1B99RtJY9aWyYa8XCg9xID/sTfEiDXpjkWFvq83TJ7+9WWkwMPCBAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export default YouTube;
