import React from 'react';
import YouTube from '../assets/YouTubeIcon';
import LinkedInIcon from '../assets/LinkedInIcon';
import Author from './Author';

const BlogDetail = () => {
  return (
    <section className="bg-[#C4C4C4] py-24">
      <div className="m-auto max-w-7xl">
        <div className="flex gap-2 text-darkGray">
          <div className="text-xs font-bold">08.04.2024</div>
          <div className="h-[1px] w-9 bg-white text-center"></div>
          <div className="text-xs font-bold">4 minutes</div>
        </div>
        <div className="m-auto max-w-4xl items-center pb-12 text-sm font-normal">
          Seamlessly syndicate cutting-edge architectures rather than
          collaborative collaboration and idea-sharing. Proactively incubate
          visionary interfaces whereas premium benefits. Seamlessly negotiate
          ubiquitous leadership skills rather than parallel ideas. Dramatically
          visualize superior interfaces for best-of-breed alignments.
          Synergistically formulate performance based users through customized
          relationships. Interactively deliver cross-platform ROI via granular
          systems. Intrinsicly enhance effective initiatives vis-a-vis
          orthogonal outsourcing. Rapidiously monetize market-driven
          opportunities with multifunctional users. Collaboratively enhance
          visionary opportunities through revolutionary schemas. Progressively
          network just in time customer service without real-time scenarios.
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex gap-3">
            <button className="rounded-md bg-[#E5E5E5] px-3 py-1">
              Adventure
            </button>
            <button className="rounded-md bg-[#E5E5E5] px-3 py-1">Photo</button>
            <button className="rounded-md bg-[#E5E5E5] px-3 py-1">
              Design
            </button>
          </div>
          <div className="h-[0.5px] max-w-4xl bg-white" />
          <div className="flex justify-between">
            <Author />
            <div className="flex">
              <YouTube />
              <LinkedInIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
