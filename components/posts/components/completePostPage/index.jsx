import { useRouter } from 'next/router';
import { useGetBlogsQuery } from '@/store/apis';

function CompletePost() {
    const {query} = useRouter()
    const { data: viewReportData } = useGetBlogsQuery();

    const data = viewReportData?.filter((p) => p?.id == query.id)

  	return (
		<div className="m-auto prose p-10">
			<div>
				
				{/* <p className="text-[#737373]">{data[0]?.published_date}</p> */}
				<h1 className="text-[28px] font-semibold">
					{data[0]?.title}
				</h1>
				{/* <div>
					<p className="text-[#949494] text-sm  ">Written by</p>
					<p className="text-[#3A3A3A]">{data[0]?.written_by}</p>
				</div> */}
                <p>{data[0]?.description}</p>
			</div>
			
		</div>
	);
}

export default CompletePost;






