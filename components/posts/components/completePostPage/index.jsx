import { useRouter } from 'next/router';
import { useGetBlogsQuery } from '@/store/apis';

function CompletePost() {
    const {query} = useRouter()
    const { data: viewReportData } = useGetBlogsQuery();

    const data = viewReportData?.filter((p) => p?.id == query.id)

    console.log('data:',data)

  	return (
		<div className="m-auto prose p-10">
			<div>
				<h1 className="text-[28px] font-semibold">
					{data[0]?.title || 'Loading...'}
				</h1>
                <p>{data[0]?.description || 'Loading...'}</p>
			</div>
		</div>
	);
}

export default CompletePost;






